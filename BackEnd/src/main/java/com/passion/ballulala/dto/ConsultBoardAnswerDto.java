package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter @Data
public class ConsultBoardAnswerDto {
    private String comment;
    private Long userId;
    private Long consult;
}
