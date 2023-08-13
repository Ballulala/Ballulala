package com.passion.ballulala.dto;

import com.passion.ballulala.controller.MatchTeamDto;
import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.PersonalMatch;
import com.passion.ballulala.repo.TeamRepo;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Data
@Builder
public class PersonalMatchListDto {
    private LocalDateTime matchDate;
    private Integer time;
    private Long stadium;
    private Long id;
    private Byte state;
    private Long manager;

    public static PersonalMatchListDto fromEntity(PersonalMatch personalMatch){
//        TeamRepo teamRepo = null;
        return PersonalMatchListDto.builder()
                .id(personalMatch.getId())
                .matchDate(personalMatch.getMatchDate())
                .time(personalMatch.getTime())
                .stadium(personalMatch.getStadium().getId())
                .manager(personalMatch.getManager() == null ? null : personalMatch.getManager().getId())
                .state(personalMatch.getState()== null ? null : personalMatch.getState())
                .build();
    }

}
