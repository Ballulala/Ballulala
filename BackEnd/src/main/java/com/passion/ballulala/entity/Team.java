package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter  @ToString
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_id", nullable = false)
    private Long id;

    @Column(name = "team_status", nullable = true)
    private Byte teamStatus;

    @Column(nullable = false, columnDefinition = "varchar(30)", unique = true)
    private String name;

    @Column(name = "leader_name", nullable = true, columnDefinition = "varchar(30)")
    private String leaderName;

    @Column(name = "phone_number", nullable = true, columnDefinition = "varchar(30)")
    private String phoneNumber;

    @Column(nullable = true)
    private Integer mmr;

    @Column(nullable = true, columnDefinition = "varchar(50)")
    private String logo;

    @Column(nullable = true, columnDefinition = "varchar(1000)")
    private String description;

    @Column(name = "win_count", nullable = true)
    private Integer winCount;

    @Column(name = "lose_count", nullable = true)
    private Integer loseCount;

    @Column(name = "winning_streak", nullable = true)
    private Integer winningStreak;

    @Column(nullable = true)
    private Integer point;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<TeamItem> teamItems = new ArrayList<>();

    public void updatePoint(int uss) {
        this.point = uss;
    }

}