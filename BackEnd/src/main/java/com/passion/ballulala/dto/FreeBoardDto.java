package com.passion.ballulala.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class FreeBoardDto {

    private String title;

    private String content;

    private LocalDateTime createTime;

    private Long hit;

    private Long userId;

}
