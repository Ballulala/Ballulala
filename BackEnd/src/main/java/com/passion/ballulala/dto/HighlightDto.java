package com.passion.ballulala.dto;

import com.passion.ballulala.entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Data
@AllArgsConstructor
public class HighlightDto {

        String title;
        String content;
        String videoLink;
        Long userId;
}
