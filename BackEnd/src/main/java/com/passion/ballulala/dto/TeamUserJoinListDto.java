package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.TeamUser;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.repo.StadiumRepo;
import com.passion.ballulala.repo.TeamRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.*;

@Getter
@Data
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TeamUserJoinListDto {
    private Long id;
    private Long team;
    private Byte state;
    private UserDto user;

    public static TeamUserJoinListDto fromEntity(TeamUser teamUser){
        return TeamUserJoinListDto.builder()
                .id(teamUser.getId())
                .user(UserDto.fromEntity(teamUser.getUser()))
                .team(teamUser.getTeam().getId())
                .state(teamUser.getState())
                .build();
    }


}
