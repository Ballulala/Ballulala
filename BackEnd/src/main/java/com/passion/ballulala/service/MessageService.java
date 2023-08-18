package com.passion.ballulala.service;

import com.passion.ballulala.dto.MessageSendDto;
import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.Message;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.repo.MessageRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepo messageRepo;
    private final UserRepo userRepo;

    @Transactional
    public void sendMessage(MessageSendDto messageSendDto){
        System.out.println(messageSendDto);
        System.out.println(1);
        User send1 = userRepo.getReferenceById(messageSendDto.getSend());
        User receive1 = userRepo.getReferenceById(messageSendDto.getReceive());
        Message message = Message.builder()
                .title(messageSendDto.getTitle())
                .content(messageSendDto.getContent())
                .sendTime(LocalDateTime.now())
                .checked((byte) 0)
                .send(send1)
                .receive(receive1)
                .build();
        messageRepo.save(message);
    }

}
