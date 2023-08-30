package com.passion.ballulala.dto;

import com.passion.ballulala.entity.User;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class MessageSendDto {

    private String title;
    private String content;
    private Long send;
    private Long receive;
}
