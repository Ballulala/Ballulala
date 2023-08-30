package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.User;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Data
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TeamUserDto {

    private Long team;

    private Byte state;
}
