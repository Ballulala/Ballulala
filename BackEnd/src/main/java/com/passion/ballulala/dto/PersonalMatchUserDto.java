package com.passion.ballulala.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class PersonalMatchUserDto {
    private Long personalMatchId;
    private String accessToken;
}
