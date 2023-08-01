package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@Table(name = "consult_board")
public class ConsultBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "consult_board_id", nullable = false)
    private Long id;

    @Column(nullable = false, columnDefinition = "varchar(45)")
    private String title;

    @Column(nullable = false, columnDefinition = "varchar(1000)")
    private String content;

    @Column(nullable = false, columnDefinition = "date")
    private LocalDateTime time;

    @Column(nullable = false)
    private Byte clear;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
