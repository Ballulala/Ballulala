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

    private String matchDate;
    private String team;
//    private Long team2;
//    private Long team3;
    private Integer time;
    private Long stadium;

}
