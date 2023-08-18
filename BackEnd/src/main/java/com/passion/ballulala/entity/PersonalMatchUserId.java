package com.passion.ballulala.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PersonalMatchUserId implements Serializable {

    private Long userId;
    private Long personalMatchId;

}
