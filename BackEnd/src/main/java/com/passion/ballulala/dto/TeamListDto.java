package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Team;
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
    private byte gugun;
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
