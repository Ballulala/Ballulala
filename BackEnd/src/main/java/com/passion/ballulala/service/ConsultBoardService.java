package com.passion.ballulala.service;


import com.passion.ballulala.dto.*;
import com.passion.ballulala.entity.ConsultBoard;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.repo.ConsultBoardRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConsultBoardService {
    private final ConsultBoardRepo consultBoardRepo;
    private final UserRepo userRepo;
    @Transactional
    public void saveConsultBoard(ConsultBoardDto consultBoardDto){
        User user = userRepo.getReferenceById(consultBoardDto.getUserId());
        ConsultBoard consultBoard = ConsultBoard.builder()
                .title(consultBoardDto.getTitle())
                .content(consultBoardDto.getContent())
                .videoLink(consultBoardDto.getVideoLink())
                .createTime(LocalDateTime.now())
                .hit(0L)
                .like(0L)
                .userId(user)
                .build();
        consultBoardRepo.save(consultBoard);
//        matchRepo.save(match);
    }

    public List<ConsultBoardListDto> getConsultBoardList() {
        return consultBoardRepo.findAllList();
    }
}