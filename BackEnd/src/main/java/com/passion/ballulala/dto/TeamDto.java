package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.TeamItem;
import com.passion.ballulala.entity.TeamUser;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder @Getter
public class TeamDto {
    private Long id;
    private String name;
    private Integer mmr;
    private String logo;
    private String description;
    private Integer winCount;
    private Integer loseCount;
    private Integer winningStreak;
    private Integer point;
    private Byte gugun;
    private List<ItemDto> items;
    private List<UserDto> users;

    public static TeamDto fromEntity(Team team){
        List<TeamItem> teamItems = team.getTeamItems();
        List<ItemDto> items = teamItems.stream().map((m) -> {
            return ItemDto.fromEntity(m.getItem());
        }).toList();

        List<TeamUser> teamUsers = team.getTeamUsers();
        List<UserDto> users = teamUsers.stream().map((m) -> {
            return UserDto.fromEntity(m.getUser());
        }).toList();

        return TeamDto.builder()
                .id(team.getId())
                .name(team.getName())
                .mmr(team.getMmr())
                .logo(team.getLogo())
                .description(team.getDescription())
                .winCount(team.getWinCount())
                .loseCount(team.getLoseCount())
                .winningStreak(team.getWinningStreak())
                .point(team.getPoint())
                .gugun(team.getGugun())
                .items(items)
                .users(users)
                .build();

    }

}
