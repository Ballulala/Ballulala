package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Team;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MatchTeamDto {
    private String name;
    private String logo;

    public static MatchTeamDto fromEntity(Team team){
        return MatchTeamDto.builder()
                .name(team.getName())
                .logo(team.getLogo())
                .build();
    }

}
