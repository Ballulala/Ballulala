package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Data
@AllArgsConstructor
public class FreeBoardDetailDto {
    private String title;
    private String nickname;
    private LocalDateTime createTime;
    private String content;
}
