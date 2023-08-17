package com.passion.ballulala.service;

import com.passion.ballulala.dto.StadiumDto;
import com.passion.ballulala.repo.StadiumRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class StadiumService {

    private final StadiumRepo stadiumRepo;

    public List<StadiumDto> stadiumList(){
        List<StadiumDto> list = stadiumRepo.findAll().stream().map((m)-> {
            return StadiumDto.fromEntity(m);
        }
        ).toList();
        return list;
    }
}
