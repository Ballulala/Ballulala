package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class MercenaryDetailDto {
    private String title;
    private String nickname;
    private LocalDateTime createTime;
    private String content;
    private Long userNo;
}
