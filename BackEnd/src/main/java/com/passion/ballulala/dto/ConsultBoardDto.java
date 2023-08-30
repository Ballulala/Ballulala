package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter @AllArgsConstructor @Data
public class ConsultBoardDto {
    String title;
    String content;
    String videoLink;
    Long userId;
}