package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter
@Builder
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "message_id", nullable = false)
    private Long id;

    @Column(nullable = false, columnDefinition = "varchar(45)")
    private String title;

    @Column(nullable = false, columnDefinition = "longtext")
    private String content;

    @Column(name = "send_time", nullable = false, columnDefinition = "date")
    private LocalDateTime sendTime;

    @Column(nullable = false, columnDefinition = "tinyint(1)")
    private Byte checked;

    @ManyToOne
    @JoinColumn(name = "send_user_id", nullable = false)
    private User send;

    @ManyToOne
    @JoinColumn(name = "receive_user_id", nullable = false)
    private User receive;
}
