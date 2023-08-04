package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Table(name = "matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "matches_id", nullable = false)
    private Long id;

    @Column(name = "home_score", nullable = false)
    private int homeScore;

    @Column(name = "away_score", nullable = false)
    private int awayScore;

    @Column(name = "match_date", nullable = false, columnDefinition = "date")
    private LocalDateTime matchDate;

    @ManyToOne
    @JoinColumn(name = "home_user_id", nullable = false)
    private User home;

    @ManyToOne
    @JoinColumn(name = "away_user_id", nullable = false)
    private User away;
}
