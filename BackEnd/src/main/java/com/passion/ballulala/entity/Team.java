package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_id", nullable = false)
    private Long id;

    @Column(name = "team_status", nullable = false)
    private Byte teamStatus;

    @Column(nullable = false, columnDefinition = "varchar(30)", unique = true)
    private String name;

    @Column(name = "leader_name", nullable = false, columnDefinition = "varchar(30)")
    private String leaderName;

    @Column(name = "phone_number", nullable = false, columnDefinition = "varchar(30)")
    private String phoneNumber;

    @Column(nullable = false)
    private int mmr;

    @Column(nullable = false, columnDefinition = "varchar(50)")
    private String logo;

    @Column(nullable = false, columnDefinition = "varchar(1000)")
    private String description;

    @Column(name = "win_count", nullable = false)
    private int winCount;

    @Column(name = "lose_count", nullable = false)
    private int loseCount;

    @Column(name = "winning_streak", nullable = false)
    private int winningStreak;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<TeamItem> teamItems = new ArrayList<>();

}