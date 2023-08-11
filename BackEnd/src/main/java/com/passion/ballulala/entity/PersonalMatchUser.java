package com.passion.ballulala.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Setter
@Table(name = "personal_match_user")
@IdClass(PersonalMatchUserId.class)
public class PersonalMatchUser {
    @Id
    @ManyToOne
    @JoinColumn(name = "personal_match_id", nullable = false)
    private PersonalMatch personalMatchId;

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;

}
