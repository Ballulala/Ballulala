package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Stadium;
import com.passion.ballulala.entity.Team;
import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class StadiumDto {
    private Long id;
    private Byte region;
    private String name;
    private String description;
    private String phoneNumber;

    public static StadiumDto fromEntity(Stadium stadium){
        return StadiumDto.builder()
                .id(stadium.getId())
                .region(stadium.getRegion())
                .name(stadium.getName())
                .description(stadium.getDescription())
                .phoneNumber(stadium.getPhoneNumber())
                .build();
    }

}
