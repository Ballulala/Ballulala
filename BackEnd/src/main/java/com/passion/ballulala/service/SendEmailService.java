package com.passion.ballulala.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class SendEmailService {

    @Autowired
    private JavaMailSender mailSender;

    public String createPassword(String email) {
        char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };

        String str = "";

        int idx = 0;
        for (int i = 0; i < 10; i++) {
            idx = (int) (charSet.length * Math.random());
            str += charSet[idx];
        }
        this.mailSend(email, str);

        return str;

    }

    public void mailSend(String email, String newPw) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("안녕하세요. 볼루랄라 임시 비밀번호 안내 이메일입니다.\n");
        message.setText(setEmailHtmlWithButton(newPw, "http://localhost:3000/", "볼루랄라 홈페이지로 이동하기"));
        message.setFrom("Ballulala");
        mailSender.send(message);
    }

    private String setEmailHtmlWithButton(String emailText, String link, String buttonText) {
        return "<html><head><style>" +
                "body { font-family: Arial, sans-serif; font-size: 14px; }" +
                "a,a:visited { text-decoration: none; color: #00AE68;}" +
                "a.button { display: block; position: relative; float: left; width: 120px; padding: 0; margin: 10px 10px 10px 0; font-weight: 600; text-align: center; line-height: 50px; color: #FFF; border-radius: 5px; transition: all 0.2s; }" +
                ".realButton { background: #323F4F; }" +
                ".realButton.btnPush { box-shadow: 0px 5px 0px 0px #F4B870; }" +
                ".btnPush:hover { margin-top: 15px; margin-bottom: 5px; }" +
                ".realButton.btnPush:hover { box-shadow: 0px 0px 0px 0px #F4B870; }" +
                ".clear { clear: both; }" +
                "</style></head><body>" +
                "<p> 회원님의 임시 비밀번호는 " + emailText + "입니다. 감사합니다.</p>" +
                "<div class=\"container\">" +
                "<a href=\"" + link + "\" title=\"Button fade blue/green\" class=\"button btnPush realButton\">"+buttonText+"</a>" +
                "<div class=\"clear\"></div>" +
                "</div></body></html>";
    }
}