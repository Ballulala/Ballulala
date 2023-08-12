package com.passion.ballulala.service;

import com.passion.ballulala.dto.FreeBoardReplyDto;
import com.passion.ballulala.dto.FreeBoardReplyListDto;
import com.passion.ballulala.dto.MercenaryReplyDto;
import com.passion.ballulala.dto.MercenaryReplyListDto;
import com.passion.ballulala.entity.*;
import com.passion.ballulala.repo.MercenaryReplyRepo;
import com.passion.ballulala.repo.MercenaryRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MercenaryReplyService {

    private final MercenaryReplyRepo mercenaryReplyRepo;
    private final MercenaryRepo mercenaryRepo;
    private final UserRepo userRepo;

    @Transactional
    public void saveMercenaryReply(MercenaryReplyDto mercenaryReplyDto){
        User user = userRepo.getReferenceById(mercenaryReplyDto.getUserId());
        Mercenary mercenary = mercenaryRepo.getReferenceById((mercenaryReplyDto.getMercenary()));
        MercenaryReply mercenaryReply = MercenaryReply.builder()
                .content(mercenaryReplyDto.getContent())
                .createTime(LocalDateTime.now())
                .mercenary(mercenary)
                .userId(user)
                .build();
        mercenaryReplyRepo.save(mercenaryReply);
//        matchRepo.save(match);
    }

    public List<MercenaryReplyListDto> getList(Long mercenaryId) {
        mercenaryRepo.findById(mercenaryId).orElseThrow(() -> new IllegalStateException("존재하지 않는 답변입니다."));
        return mercenaryReplyRepo.findAllList(mercenaryId);
    }

    @Transactional
    public void updateMercenaryReply(Long id, MercenaryReplyDto mercenaryReplyDto) {
        MercenaryReply mercenaryReply = mercenaryReplyRepo.findById(id).orElseThrow(() -> new IllegalStateException("존재하지 않는 답변입니다."));
        mercenaryReply.setContent(mercenaryReplyDto.getContent());
    }

    @Transactional
    public void deleteMercenaryReply(Long id) {
        MercenaryReply mercenaryReply = mercenaryReplyRepo.findById(id).orElseThrow(() -> new IllegalStateException("존재하지 않는 답변입니다."));
        mercenaryReplyRepo.delete(mercenaryReply);
    }
}
