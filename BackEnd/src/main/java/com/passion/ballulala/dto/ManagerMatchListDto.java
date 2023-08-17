package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.Stadium;
import com.passion.ballulala.entity.Team;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter @Builder
public class ManagerMatchListDto {
    private Long matchId;
    private Long team1;
    private Long team2;
    private Long team3;
    private Integer time;
    private LocalDateTime matchDate;
    private StadiumDto stadium;
    private Byte state;

    public static ManagerMatchListDto fromEntity(Match match){
        return ManagerMatchListDto.builder()
                .matchId(match.getId())
                .team1(match.getTeam1().getId())
                .team2(match.getTeam2().getId())
                .team3(match.getTeam3().getId())
                .time(match.getTime())
                .matchDate(match.getMatchDate())
                .stadium(StadiumDto.fromEntity(match.getStadium()))
                .state(match.getState())
                .build();
    }
}
