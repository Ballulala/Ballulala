package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Stadium;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.User;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter @Data
public class MatchAddDto {

    private LocalDateTime matchDate;
    private Long team1;
    private Long team2;
    private Long team3;
    private Integer time;
    private Long manager;
    private Long stadium;
    private Byte state;

}
