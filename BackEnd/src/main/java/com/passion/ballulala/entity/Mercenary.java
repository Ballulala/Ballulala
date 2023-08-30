package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Entity
public class Mercenary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mercenary_id", nullable = false)
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
    private User userId;
}
