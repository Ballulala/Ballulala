package com.passion.ballulala.service;

import com.passion.ballulala.dto.TeamItemBuyDto;
import com.passion.ballulala.entity.Item;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.TeamItem;
import com.passion.ballulala.repo.ItemRepo;
import com.passion.ballulala.repo.TeamItemRepo;
import com.passion.ballulala.repo.TeamRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TeamItemService {

    private final ItemRepo itemRepo;
    private final TeamRepo teamRepo;
    private final TeamItemRepo teamItemRepo;

    // 구매하는 팀의정보

    // 상품 식별번호

    //
    @Transactional
    public void saveItem(TeamItemBuyDto teamItemBuyDto) {
//        itemRepo.save(new Item(teamItemBuyDto.getItemId(), "아이템1", 1000));
//        teamItemRepo.save(teamItemBuyDto.getTeamId());

        Item item = itemRepo.findOne(teamItemBuyDto.getItemId());
        Team team = teamRepo.getOne(teamItemBuyDto.getTeamId());
        // 팀에서 가지고 있는 포인트를 가져와 - item에서 가격을 가져와서 빼기
        // 0이하면 thorw
        // 아니면 뺀 값을 팀에 다시 저장
        if(team.getPoint()-item.getCost()>=0){
            team.updatePoint(team.getPoint()-item.getCost());
        }
        else{
            System.out.println("fale");
        }
        teamRepo.save(team);

        TeamItem teamItem = TeamItem.builder()
                .team(team)
                .item(item)
                .buyDate(LocalDateTime.now())
                .deadline(LocalDateTime.now().plusYears(1000))
                .build();


        teamItemRepo.save(teamItem);
    }
}
