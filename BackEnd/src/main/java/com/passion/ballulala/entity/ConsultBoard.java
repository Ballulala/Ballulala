package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@AllArgsConstructor
@Builder
@Table(name = "consult_board")
public class ConsultBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "consult_board_id", nullable = false)
    private Long id;

    @Column(nullable = false, columnDefinition = "varchar(45)")
    private String title;

    @Column(nullable = false, columnDefinition = "longtext")
    private String content;

    @Column(nullable = false, columnDefinition = "varchar(200)")
    private String videoLink;

    @Column(name = "create_time", nullable = false, columnDefinition = "date")
    private LocalDateTime createTime;

    @Column(nullable = false)
    private Long hit;

    @Column(name = "likes", nullable = true)
    private Long like;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;
}