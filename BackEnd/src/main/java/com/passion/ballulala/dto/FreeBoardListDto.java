package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter @Data @AllArgsConstructor
public class FreeBoardListDto {
    Long id;
    String title;
    LocalDateTime createTime;
    String nickname;
}
