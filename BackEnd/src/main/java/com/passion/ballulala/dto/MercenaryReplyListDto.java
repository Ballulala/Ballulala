package com.passion.ballulala.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Data
@AllArgsConstructor
public class MercenaryReplyListDto {
    private Long id; // mercenary_id
    private String nickname;
    private LocalDateTime createTime;
    private String content;
    private Long userId;
}
