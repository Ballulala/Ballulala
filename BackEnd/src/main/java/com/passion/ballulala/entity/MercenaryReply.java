package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "mercenary_reply")
public class MercenaryReply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mercenary_reply_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "mercenary_id", nullable = false)
    private Mercenary mercenary;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;

    @Column(nullable = false, columnDefinition = "longtext")
    private String content;

    @Column(name = "create_time", nullable = false, columnDefinition = "date")
    private LocalDateTime createTime;
}
