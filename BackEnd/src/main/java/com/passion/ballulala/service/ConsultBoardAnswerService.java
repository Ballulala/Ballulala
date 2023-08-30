package com.passion.ballulala.service;


import com.passion.ballulala.dto.ConsultBoardAnswerDto;
import com.passion.ballulala.dto.ConsultBoardAnswerListDto;
import com.passion.ballulala.dto.ConsultBoardListDto;
import com.passion.ballulala.entity.*;
import com.passion.ballulala.repo.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConsultBoardAnswerService {
    private final ConsultBoardAnswerRepo consultBoardAnswerRepo;
    private final UserRepo userRepo;
    private final ConsultBoardRepo consultBoardRepo;
    @Transactional
    public void saveConsultBoardAnswer(ConsultBoardAnswerDto consultBoardAnswerDto){
        User user = userRepo.getReferenceById(consultBoardAnswerDto.getUserId());
        ConsultBoard consultBoard = consultBoardRepo.getReferenceById((consultBoardAnswerDto.getConsult()));
        ConsultBoardAnswer consultBoardAnswer = ConsultBoardAnswer.builder()
                .comment(consultBoardAnswerDto.getComment())
                .createTime(LocalDateTime.now())
                .consult(consultBoard)
                .user(user)
                .build();
        consultBoardAnswerRepo.save(consultBoardAnswer);
//        matchRepo.save(match);
    }

    public List<ConsultBoardAnswerListDto> getConsultBoardAnswerList() {
        return consultBoardAnswerRepo.findAllList();
    }

}
