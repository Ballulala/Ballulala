package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long id;

    @Column(nullable = true, columnDefinition = "tinyint")
    private Byte status;

    @Column(nullable = true, columnDefinition = "tinyint")
    private Byte role;

    @Column(nullable = true, columnDefinition = "varchar(30)")
    private String email;

    @Column(nullable = true, columnDefinition = "varchar(30)")
    private String password;

    @Column(nullable = true, columnDefinition = "varchar(10)")
    private String name;

    @Column(nullable = true, columnDefinition = "varchar(30)")
    private String nickname;

    @Column(nullable = true, columnDefinition = "tinyint")
    private Byte gender;

    @Column(nullable = true, columnDefinition = "date")
    private LocalDateTime birthday;

    @Column(name = "phone_number", nullable = true, columnDefinition = "varchar(20)")
    private String phoneNumber;

    @Column(name = "mvp_count", nullable = true)
    private int mvpCount;

    @Column(columnDefinition = "varchar(500)")
    private String accesstoken;

    @Column(columnDefinition = "varchar(500)")
    private String refreshtoken;

    @Column(nullable = true)
    private int point;

    @Column(nullable = true)
    private int manner;

    @Column(nullable = true, columnDefinition = "varchar(20)")
    private String sido;

    @Column(nullable = true, columnDefinition = "varchar(20)")
    private String gugun;

    @Column(name = "profile_image", nullable = true, columnDefinition = "varchar(100)")
    private String profileImage;

    @Column(nullable = true)
    private int tier;

    @Builder.Default
    @OneToMany(mappedBy = "user")
    private List<UserItem> userItems = new ArrayList<>();
}