package com.passion.ballulala.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

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
    private byte gender;
    private LocalDateTime birthday;
    private String phoneNumber;
    private int mvpCount;
    private String accesstoken;
    private String refreshtoken;
    private int point;
    private int manner;
}
