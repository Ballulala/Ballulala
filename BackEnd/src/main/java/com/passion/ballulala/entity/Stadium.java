package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@AllArgsConstructor
@Builder
@ToString
public class Stadium {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stadium_id", nullable = false)
    private Long id;

    @Column(nullable = false, columnDefinition = "tinyint")
    private Byte region;

    @Column(nullable = false, columnDefinition = "varchar(50)")
    private String name;

    @Column(nullable = false, columnDefinition = "longtext")
    private String description;

    @Column(name = "phone_number", nullable = false, columnDefinition = "varchar(30)")
    private String phoneNumber;

    @Builder.Default
    @OneToMany(fetch=FetchType.LAZY, mappedBy = "stadium", cascade = CascadeType.ALL)
    private List<Match> matches = new ArrayList<>();

}
