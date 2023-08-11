package com.passion.ballulala.service;

import com.passion.ballulala.dto.MercenaryDto;
import com.passion.ballulala.dto.MercenaryListDto;
import com.passion.ballulala.entity.Mercenary;
import com.passion.ballulala.entity.User;
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
public class MercenaryService {
    private final MercenaryRepo mercenaryRepo;
    private final UserRepo userRepo;

    @Transactional
    public void saveMercenary(MercenaryDto mercenaryDto){
        User user = userRepo.getReferenceById(mercenaryDto.getUserId());
        Mercenary mercenary = Mercenary.builder()
                .title(mercenaryDto.getTitle())
                .content(mercenaryDto.getContent())
                .createTime(LocalDateTime.now())
                .hit(0L)
                .userId(user)
                .build();
        mercenaryRepo.save(mercenary);
//        matchRepo.save(match);
    }

    public List<MercenaryListDto> getMercenaryList() {
        return mercenaryRepo.findAllList();
    }
}
