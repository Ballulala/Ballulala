package com.passion.ballulala.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.repo.TeamRepo;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter @ToString @Data @Builder
@AllArgsConstructor @NoArgsConstructor
public class UserDto {

    private long id;
    private byte status;
    private byte role;
    private String email;
    private String password;
    private String name;
    private String nickname;
    private byte gugun;
    private byte gender;
    private String birthday;
    private String phoneNumber;
    private int mvpCount;
    private String refreshtoken;
    private int point;
    private int manner;
    private String profileImage;

    public User toEntity(){
        String[] args = birthday.split("-");

        return User.builder()
                .id(id)
                .status(status)
                .role(role)
                .email(email)
                .nickname(nickname)
                .password(password)
                .name(name)
                .birthday(LocalDateTime.of(Integer.parseInt(args[0]), Integer.parseInt(args[1]),Integer.parseInt(args[2]),0,0,0))
                .phoneNumber(phoneNumber)
                .gender(gender)
                .gugun(gugun)
                .mvpCount(mvpCount)
                .point(point)
                .manner(manner)
                .profileImage(profileImage)
                .build();
    }

    public static UserDto fromEntity(User user){
        TeamRepo teamRepo = null;
        return UserDto.builder()
                .id(user.getId())
                .status(user.getStatus())
                .role(user.getRole())
                .email(user.getEmail())
                .nickname(user.getNickname())
                .password(user.getPassword())
                .name(user.getName())
                .birthday(user.getBirthday().toString())
                .phoneNumber(user.getPhoneNumber())
                .gender(user.getGender())
                .gugun(user.getGugun())
                .mvpCount(user.getMvpCount())
                .point(user.getPoint())
                .manner(user.getManner())
                .profileImage(user.getProfileImage())
                .build();
    }
}
