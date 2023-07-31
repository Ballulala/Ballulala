package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "store_id", nullable = false)
    private Long id;

    @Column(nullable = false, columnDefinition = "varchar(30)")
    private String name;

    @Column(nullable = false)
    private int cost;
}
