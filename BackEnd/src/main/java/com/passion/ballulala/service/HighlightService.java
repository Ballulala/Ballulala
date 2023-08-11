package com.passion.ballulala.service;

import com.passion.ballulala.dto.FreeBoardDto;
import com.passion.ballulala.dto.HighlightDto;
import com.passion.ballulala.dto.HighlightListDto;
import com.passion.ballulala.entity.FreeBoard;
import com.passion.ballulala.entity.Highlight;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.repo.HighlightRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class HighlightService {

    private final HighlightRepo highlightRepo;
    private final UserRepo userRepo;

    @Transactional
    public void saveHighlight(HighlightDto highlightDto){
        User user = userRepo.getReferenceById(highlightDto.getUserId());
        Highlight highlight = Highlight.builder()
                .title(highlightDto.getTitle())
                .content(highlightDto.getContent())
                .videoLink(highlightDto.getVideoLink())
                .createTime(LocalDateTime.now())
                .hit(0L)
                .like(0L)
                .userId(user)
                .build();
        highlightRepo.save(highlight);
//        matchRepo.save(match);
    }

    public List<HighlightListDto> getHighlightList() {
        return highlightRepo.findAllList();
    }
}
