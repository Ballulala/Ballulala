package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter @Data @AllArgsConstructor
public class HighlightListDto {

    private String nickname;
    private String title;
    private String videoLink;
    private Long id;
}
