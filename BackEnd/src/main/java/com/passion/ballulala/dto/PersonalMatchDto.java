package com.passion.ballulala.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class PersonalMatchDto {
    private String matchDate;
    private Integer time;
    private Long stadium;
}
