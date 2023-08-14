package com.passion.ballulala.service;

import com.passion.ballulala.dto.*;
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

    @Transactional
    public HighlightDetailDto getHighlightDetail(Long id) {
        highlightRepo.findById(id).orElseThrow(() -> new IllegalStateException("존재하지 않는 게시글입니다."));

        highlightRepo.updateHits(id);

        return highlightRepo.findDetail(id);
    }

    @Transactional
    public void updateHighlight(Long id, HighlightDto highlightDto) {
        Highlight highlight = highlightRepo.findById(id).orElseThrow(() -> new IllegalStateException("존재하지 않는 게시글입니다."));
        highlight.setTitle(highlightDto.getTitle());
        highlight.setContent(highlightDto.getContent());
    }

    @Transactional
    public void deleteHighlight(Long id) {
        Highlight highlight = highlightRepo.findById(id).orElseThrow(() -> new IllegalStateException("존재하지 않는 게시글입니다."));
        highlightRepo.delete(highlight);
    }
}
