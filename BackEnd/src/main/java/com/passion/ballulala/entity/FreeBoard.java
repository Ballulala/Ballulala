package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Clob;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "free_board")
public class FreeBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "free_board_id", nullable = false)
    private Long id;

    @Column(nullable = false, columnDefinition = "varchar(45)")
    private String title;

    @Column(nullable = false, columnDefinition = "longtext")
    private String content;

    @Column(name = "create_time", nullable = false, columnDefinition = "date")
    private LocalDateTime createTime;

    @Column(nullable = false)
    private Long hit;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
