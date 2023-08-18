package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
@Builder
@AllArgsConstructor
public class UserItemBuyListDto {
    private Long id;

    private Integer point;

    private String img;

}
