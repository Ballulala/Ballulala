package com.passion.ballulala.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.passion.ballulala.entity.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.type.descriptor.java.LocalDateJavaType;

import java.time.LocalDateTime;

@Getter @Setter @ToString
public class UserDto {
    private long id;
    private byte status;
    private byte role;
    private String email;
    private String password;
    private String name;
    private String nickname;
    private String sido;
    private String gugun;
    private byte gender;
    private String birthday;
    private String phoneNumber;
    private int mvpCount;
    private String accesstoken;
    private String refreshtoken;
    private int point;
    private int manner;

    public User toEntity(){
        String[] args = birthday.split("-");

        return User.builder()
                .email(email)
                .nickname(nickname)
                .password(password)
                .name(name)
                .birthday(LocalDateTime.of(Integer.parseInt(args[0]), Integer.parseInt(args[1]),Integer.parseInt(args[2]),0,0,0))
                .phoneNumber(phoneNumber)
                .gender(gender)
                .sido(sido)
                .gugun(gugun)
                .build();
    }
}
