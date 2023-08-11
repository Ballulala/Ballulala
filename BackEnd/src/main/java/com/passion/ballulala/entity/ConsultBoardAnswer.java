package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Builder
@AllArgsConstructor
@Table(name = "consult_board_answer")
public class ConsultBoardAnswer {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "consult_board_answer_id",nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn( name = "user_id",nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "consult_board_id", nullable = false)
    private ConsultBoard consult;

    @Column(columnDefinition = "varchar(1000)")
    private String comment;

    @Column(name = "create_time", columnDefinition = "date")
    private LocalDateTime createTime;
}
