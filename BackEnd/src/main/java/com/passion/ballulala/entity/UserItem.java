package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
public class UserItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_item_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "store_id",nullable = false)
    private Store product;

    @Column(nullable = false, columnDefinition = "date")
    private LocalDateTime deadline;

    @Column(name = "buy_date", nullable = false, columnDefinition = "date")
    private LocalDateTime buyDate;
}
