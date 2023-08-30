package com.passion.ballulala.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Data
public class FreeBoardReplyDto {
    private String content;
    private Long userId;
    private Long board;
}
