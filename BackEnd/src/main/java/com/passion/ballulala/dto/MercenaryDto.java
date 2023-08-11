package com.passion.ballulala.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class MercenaryDto {
    private String title;
    private String content;
    private Long userId;
}
