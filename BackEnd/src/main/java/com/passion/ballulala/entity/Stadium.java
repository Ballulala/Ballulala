package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter  @ToString
@AllArgsConstructor
@Builder
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

    @OneToMany(mappedBy = "stadium", cascade = CascadeType.ALL)
    private List<Match> matches = new ArrayList<>();

}
