package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long id;

    @Column(nullable = false, columnDefinition = "tinyint")
    private Byte status;

    @Column(nullable = false, columnDefinition = "tinyint")
    private Byte role;

    @Column(nullable = false, columnDefinition = "varchar(30)")
    private String email;

    @Column(nullable = false, columnDefinition = "varchar(30)")
    private String password;

    @Column(nullable = false, columnDefinition = "varchar(10)")
    private String name;

    @Column(nullable = false, columnDefinition = "varchar(30)")
    private String nickname;

    @Column(nullable = false, columnDefinition = "tinyint")
    private Byte gender;

    @Column(nullable = false, columnDefinition = "date")
    private LocalDateTime birthday;

    @Column(name = "phone_number", nullable = false, columnDefinition = "varchar(20)")
    private String phoneNumber;

    @Column(name = "mvp_count", nullable = false)
    private int mvpCount;

    @Column(columnDefinition = "varchar(100)")
    private String accesstoken;

    @Column(columnDefinition = "varchar(100)")
    private String refreshtoken;

    @Column(nullable = false)
    private int point;

    @Column(nullable = false)
    private int manner;

    @Column(nullable = false, columnDefinition = "varchar(20)")
    private String sido;

    @Column(nullable = false, columnDefinition = "varchar(20)")
    private String gugun;

    @Column(name = "profile_image", nullable = false, columnDefinition = "varchar(100)")
    private String profileImage;

    @Column(nullable = false)
    private int tier;

    @OneToMany(mappedBy = "user")
    private List<UserItem> userItems = new ArrayList<>();

}