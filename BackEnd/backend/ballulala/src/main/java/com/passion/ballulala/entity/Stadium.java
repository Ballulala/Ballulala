package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Stadium {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stadium_id", nullable = false)
    private Long id;

    @Column(nullable = false, columnDefinition = "varchar(20)")
    private String region;

    @Column(nullable = false, columnDefinition = "varchar(10)")
    private String name;

    @Column(nullable = false, columnDefinition = "longtext")
    private String description;

    @Column(name = "phone_number", nullable = false, columnDefinition = "varchar(30)")
    private String phoneNumber;
}
