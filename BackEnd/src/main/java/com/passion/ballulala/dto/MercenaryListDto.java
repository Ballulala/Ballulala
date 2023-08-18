package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter @Data @AllArgsConstructor
public class MercenaryListDto {
    private Long id;
    private String title;
    private LocalDateTime createTime;
    private String nickname;
}
