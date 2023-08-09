package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.User;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
public class TeamUserDto {

    private Long id;

    private User user;

    private Team team;

    private Byte state;
}
