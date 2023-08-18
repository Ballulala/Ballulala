package com.passion.ballulala.dto;

import com.passion.ballulala.entity.Item;
import lombok.Builder;
import lombok.Getter;

@Builder @Getter
public class ItemDto {
    private Long id;
    private String name;
    private int cost;
    private String img;

    public static ItemDto fromEntity(Item item){
        return ItemDto.builder()
                .id(item.getId())
                .name(item.getName())
                .cost(item.getCost())
                .img(item.getImg())
                .build();
    }
}
