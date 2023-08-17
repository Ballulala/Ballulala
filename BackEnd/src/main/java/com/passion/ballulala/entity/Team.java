package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter  @ToString @Setter
@AllArgsConstructor @Builder

public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_id", nullable = false)
    private Long id;

    @Column(nullable = false, columnDefinition = "varchar(30)", unique = true)
    private String name;

//    @ManyToOne
//    @JoinColumn( nullable = true, columnDefinition = "varchar(30)")
//    private User leader;

//    @Column(name = "phone_number", nullable = true, columnDefinition = "varchar(30)")
//    private String phoneNumber;

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

    @Column(nullable = false, columnDefinition = "tinyint")
    private Byte gugun;

    @Builder.Default
    @OneToMany(fetch=FetchType.LAZY, mappedBy = "team", cascade = CascadeType.ALL)
    private List<TeamItem> teamItems = new ArrayList<>();

    @Builder.Default
    @OneToMany(fetch=FetchType.LAZY, mappedBy = "team", cascade = CascadeType.ALL)
    private List<TeamUser> teamUsers = new ArrayList<>();

    public void updatePoint(int uss) {
        this.point = uss;
    }

}