package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
@Builder
@AllArgsConstructor
public class TeamItemBuyListDto {
    private Long id;

    private Integer point;

//    private String logo;



    private String img;

}
