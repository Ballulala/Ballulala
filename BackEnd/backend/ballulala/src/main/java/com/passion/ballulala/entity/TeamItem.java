package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
public class TeamItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_item_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "store_id", nullable = false)
    private Store product;

    @ManyToOne
    @JoinColumn(name = "team_id", nullable = false)
    private Team team;

    @Column(nullable = false, columnDefinition = "date")
    private LocalDateTime deadline;

    @Column(name = "buy_date", nullable = false, columnDefinition = "date")
    private LocalDateTime buyDate;
}
