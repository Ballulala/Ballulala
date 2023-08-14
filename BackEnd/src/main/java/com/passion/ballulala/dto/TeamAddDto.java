package com.passion.ballulala.dto;

import com.passion.ballulala.entity.TeamItem;
import com.passion.ballulala.entity.TeamUser;
import com.passion.ballulala.entity.User;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter @Data
public class TeamAddDto {
    private String name;
    private byte gugun;
    private String description;
    private String logo;
    private Long user;
}
