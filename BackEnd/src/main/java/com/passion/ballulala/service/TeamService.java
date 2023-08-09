package com.passion.ballulala.service;


import com.passion.ballulala.dto.TeamAddDto;
import com.passion.ballulala.dto.TeamItemBuyDto;
import com.passion.ballulala.entity.*;
import com.passion.ballulala.repo.TeamRepo;
import com.passion.ballulala.repo.TeamUserRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TeamService {

    private final TeamRepo teamRepo;
    private final TeamUserRepo teamUserRepo;
    private final UserRepo userRepo;

    @Transactional
    public void saveTeam(TeamAddDto teamAddDto) {
//        itemRepo.save(new Item(teamItemBuyDto.getItemId(), "아이템1", 1000));
//        teamItemRepo.save(teamItemBuyDto.getTeamId());

        // 팀에서 가지고 있는 포인트를 가져와 - item에서 가격을 가져와서 빼기
        // 0이하면 thorw
        // 아니면 뺀 값을 팀에 다시 저장
        Team team = Team.builder()
                .name(teamAddDto.getName())
                .sido(teamAddDto.getSido())
                .gugun(teamAddDto.getGugun())
                .description(teamAddDto.getDescription())
                .build();

        User user = userRepo.getReferenceById(teamAddDto.getUser());



        if(teamRepo.findByName(teamAddDto.getName()) == null) {
            teamRepo.save(team);
            Team team1 = teamRepo.findByName(teamAddDto.getName());
            TeamUser teamUser = TeamUser.builder()
                    .user(user)
                    .team(team1)
                    .state((byte) 0)  // byte로 형변환
                    .build();
            teamUserRepo.save(teamUser);
        } else {
            System.out.println("이름을 고쳐주세요");
        }

    }
}
