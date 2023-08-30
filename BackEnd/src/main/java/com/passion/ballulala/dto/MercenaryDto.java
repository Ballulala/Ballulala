package com.passion.ballulala.dto;

import lombok.*;

@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
public class MercenaryDto {
    private String title;
    private String content;
    private Long userId;
}
