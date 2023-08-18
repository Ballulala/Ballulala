package com.passion.ballulala.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class MercenaryReplyDto {

    private String content;
    private Long userId;
    private Long mercenary;
}
