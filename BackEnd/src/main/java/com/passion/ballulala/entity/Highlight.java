package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@Builder
public class Highlight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "highlight_id", nullable = false)
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
