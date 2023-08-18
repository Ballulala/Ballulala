package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.Stadium;
import com.passion.ballulala.repo.StadiumRepo;
import com.passion.ballulala.repo.TeamRepo;
import lombok.*;

import java.time.LocalDateTime;
@Getter @Setter
@Builder
public class MatchLoadDto {
    private Long id;
    private LocalDateTime matchDate;
    private MatchTeamDto team1;
    private MatchTeamDto team2;
    private MatchTeamDto team3;
    private Integer time;
    private StadiumDto stadium;
    private Long manager;
    private Byte state;

    public static MatchLoadDto fromEntity(Match match){
        TeamRepo teamRepo = null;
        StadiumRepo stadiumRepo = null;
        return MatchLoadDto.builder()
                .id(match.getId())
                .matchDate(match.getMatchDate())
                .team1(match.getTeam1() == null ? null : MatchTeamDto.fromEntity(match.getTeam1()))
                .team2(match.getTeam2() == null ? null : MatchTeamDto.fromEntity(match.getTeam2()))
                .team3(match.getTeam3() == null ? null : MatchTeamDto.fromEntity(match.getTeam3()))
                .time(match.getTime())
                .stadium(StadiumDto.fromEntity(match.getStadium()))
                .manager(match.getManager() == null ? null : match.getManager().getId())
                .state(match.getState())
                .build();
    }
}
