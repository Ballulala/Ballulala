package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Setter
@Table(name = "personal_match")
public class PersonalMatch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "personal_match_id", nullable = false)
    private Long id;

    @Column(name = "match_date", nullable = false, columnDefinition = "date")
    private LocalDateTime matchDate;

    @Column(name = "match_time", nullable = false)
    private Integer time;

    @ManyToOne
    @JoinColumn(name = "manager_id", nullable = true)
    private User manager;

    @ManyToOne
    @JoinColumn(name = "stadium_id", nullable = false)
    private Stadium stadium;

    @Column(name = "state", nullable = false, columnDefinition = "tinyint(1)")
    private Byte state;

    @Builder.Default
    @OneToMany(mappedBy = "personalMatchId", cascade = CascadeType.ALL)
    private List<PersonalMatchUser> personalMatchUsers = new ArrayList<>();

}
