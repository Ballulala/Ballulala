package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Table(name = "free_board_reply")
public class FreeBoardReply {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "free_board_reply_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "free_board_id", nullable = false)
    private FreeBoard board;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false, columnDefinition = "longtext")
    private String content;

    @Column(name = "create_time", nullable = false, columnDefinition = "date")
    private LocalDateTime createTime;
}
