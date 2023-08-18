package com.passion.ballulala.dto;

import lombok.*;
import org.springframework.web.ErrorResponse;

import java.time.LocalDateTime;

@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
public class FreeBoardDto {

    private String title;
    private String content;
    private Long userId;

}
