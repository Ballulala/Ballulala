package com.passion.ballulala.dto;

import com.passion.ballulala.controller.MatchTeamDto;
import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.repo.TeamRepo;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
@AllArgsConstructor
@Builder
public class TeamListDto {

    private Long id;
    private String name;
    private String sido;
    private String gugun;
    private Integer mmr;
    private String logo;
    private String description;
    private Integer winCount;
    private Integer loseCount;
    private Integer winningStreak;
    private Integer point;


    public static TeamListDto fromEntity(Team team){
        return TeamListDto.builder()
                .id(team.getId())
                .name(team.getName())
                .sido(team.getSido())
                .gugun(team.getGugun())
                .mmr(team.getMmr())
                .logo(team.getLogo())
                .description(team.getDescription())
                .winCount(team.getWinCount())
                .loseCount(team.getLoseCount())
                .winningStreak(team.getWinCount())
                .point(team.getPoint())
                .build();
    }

}
