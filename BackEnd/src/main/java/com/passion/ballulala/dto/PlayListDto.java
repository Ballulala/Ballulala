package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.Play;
import com.passion.ballulala.entity.Team;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class PlayListDto {

    private Long id;
    private int teamScore1;
    private int teamScore2;
    private int order;
    private String team1;
    private String team2;
    private Long match;

    public static PlayListDto fromEntity(Play play){
        return PlayListDto.builder()
                .id(play.getId())
                .teamScore1(play.getTeamScore1())
                .teamScore2(play.getTeamScore2())
                .order(play.getOrder())
                .team1(play.getTeam1().getName())
                .team2(play.getTeam2().getName())
                .match(play.getMatch().getId())
                .build();
    }


}
