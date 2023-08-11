package com.passion.ballulala.service;

import com.passion.ballulala.dto.FreeBoardDto;
import com.passion.ballulala.dto.FreeBoardListDto;
import com.passion.ballulala.dto.FreeBoardReplyDto;
import com.passion.ballulala.dto.FreeBoardReplyListDto;
import com.passion.ballulala.entity.FreeBoard;
import com.passion.ballulala.entity.FreeBoardReply;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.repo.FreeBoardReplyRepo;
import com.passion.ballulala.repo.FreeBoardRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FreeBoardReplyService {

    private final FreeBoardReplyRepo freeBoardReplyRepo;
    private final UserRepo userRepo;
    private final FreeBoardRepo freeBoardRepo;
    @Transactional
    public void saveFreeBoardReply(FreeBoardReplyDto freeBoardReplyDto){
        User user = userRepo.getReferenceById(freeBoardReplyDto.getUserId());
        FreeBoard freeBoard = freeBoardRepo.getReferenceById((freeBoardReplyDto.getBoard()));
        FreeBoardReply freeBoardReply = FreeBoardReply.builder()
                .content(freeBoardReplyDto.getContent())
                .createTime(LocalDateTime.now())
                .board(freeBoard)
                .userId(user)
                .build();
        freeBoardReplyRepo.save(freeBoardReply);
//        matchRepo.save(match);
    }

    public List<FreeBoardReplyListDto> getList(Long freeBoardId) {
        freeBoardRepo.findById(freeBoardId).orElseThrow(() -> new IllegalStateException("존재하지 않는 게시글입니다."));
        return freeBoardReplyRepo.findAllList(freeBoardId);
    }

}
