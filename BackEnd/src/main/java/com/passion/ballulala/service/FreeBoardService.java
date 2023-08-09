package com.passion.ballulala.service;

import com.passion.ballulala.dto.FreeBoardDto;
import com.passion.ballulala.dto.FreeBoardListDto;
import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.entity.*;
import com.passion.ballulala.repo.FreeBoardRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FreeBoardService {
    private final FreeBoardRepo freeBoardRepo;
    private final UserRepo userRepo;
    @Transactional
    public void saveFreeBoard(FreeBoardDto freeBoardDto){
        User user = userRepo.getReferenceById(freeBoardDto.getUserId());
        FreeBoard freeBoard = FreeBoard.builder()
            .title(freeBoardDto.getTitle())
            .content(freeBoardDto.getContent())
            .createTime(LocalDateTime.now())
            .hit(0L)
            .userId(user)
            .build();
        freeBoardRepo.save(freeBoard);
//        matchRepo.save(match);
    }

    public List<FreeBoardListDto> getFreeBoardList() {
        return freeBoardRepo.findAllList();
    }


}