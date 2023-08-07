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
@Table(name = "matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "matches_id", nullable = false)
    private Long id;

    @Column(name = "match_date", nullable = false, columnDefinition = "date")
    private LocalDateTime matchDate;

    @ManyToOne
    @JoinColumn(name = "team_id1", nullable = false)
    private Team team1;

    @ManyToOne
    @JoinColumn(name = "team_id2", nullable = false)
    private Team team2;

    @ManyToOne
    @JoinColumn(name = "team_id3", nullable = false)
    private Team team3;

    @Column(name = "match_time", nullable = false)
    private int time;

    @ManyToOne
    @JoinColumn(name = "manager_id", nullable = false)
    private User manager;

    @ManyToOne
    @JoinColumn(name = "stadium_id", nullable = false)
    private Stadium stadium;

    @Column(name = "state", nullable = false, columnDefinition = "tinyint(1)")
    private Byte state;

}
