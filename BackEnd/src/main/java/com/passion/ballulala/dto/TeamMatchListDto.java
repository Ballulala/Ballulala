package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
@AllArgsConstructor
public class TeamMatchListDto {
    Long TeamId;
    String name;
    String logo;
    Integer mmr;
    Integer winCount;
    Integer loseCount;
}
