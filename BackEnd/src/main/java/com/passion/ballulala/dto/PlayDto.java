package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.Play;
import com.passion.ballulala.entity.Team;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class PlayDto {

    private Long id;
    private int teamScore1;
    private int teamScore2;
    private int order;
    private Team team1;
    private Team team2;
    private Match match;

    public Play toEntity(){
        return Play.builder()
                .teamScore1(teamScore1)
                .teamScore2(teamScore2)
                .order(order)
                .team1(team1)
                .team2(team2)
                .match(match)
                .build();
    }


}
