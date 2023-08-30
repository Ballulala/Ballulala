package com.passion.ballulala.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FreeBoardDetailDto {
    private String title;
    private String nickname;
    private LocalDateTime createTime;
    private String content;
    private Long userNo;
}
