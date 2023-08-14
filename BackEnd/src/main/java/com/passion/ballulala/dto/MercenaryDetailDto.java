package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class MercenaryDetailDto {
    private String title;
    private String nickname;
    private LocalDateTime createTime;
    private String content;
}
