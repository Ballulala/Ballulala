package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor @AllArgsConstructor
@Getter
@Builder
@Table(name = "play")
public class Play {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "play_id", nullable = false)
    private Long id;

    @Column(name = "team_score1", nullable = false)
    private int teamScore1;

    @Column(name = "team_score2", nullable = false)
    private int teamScore2;

    @Column(name = "match_order", nullable = false)
    private int order;

    @ManyToOne
    @JoinColumn(name = "team_id1", nullable = false)
    private Team team1;

    @ManyToOne
    @JoinColumn(name = "team_id2", nullable = false)
    private Team team2;

    @ManyToOne
    @JoinColumn(name = "matches_id", nullable = false)
    private Match match;

}
