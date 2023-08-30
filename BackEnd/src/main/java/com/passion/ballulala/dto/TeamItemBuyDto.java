package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
@Builder
@AllArgsConstructor
public class TeamItemBuyDto {

    private Long itemId;
    private Long teamId;
}
