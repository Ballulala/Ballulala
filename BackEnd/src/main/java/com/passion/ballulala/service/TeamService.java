package com.passion.ballulala.service;


import com.passion.ballulala.dto.TeamAddDto;
import com.passion.ballulala.dto.TeamListDto;
import com.passion.ballulala.dto.TeamMatchListDto;
import com.passion.ballulala.entity.*;
import com.passion.ballulala.jwt.JwtTokenProvider;
import com.passion.ballulala.repo.TeamRepo;
import com.passion.ballulala.repo.TeamUserRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TeamService {

    private final JwtTokenProvider jwtTokenProvider;
    private final TeamRepo teamRepo;
    private final TeamUserRepo teamUserRepo;
    private final UserRepo userRepo;

    @Transactional
    public void saveTeam(TeamAddDto teamAddDto, String accessToken) {
//        itemRepo.save(new Item(teamItemBuyDto.getItemId(), "아이템1", 1000));
//        teamItemRepo.save(teamItemBuyDto.getTeamId());

        teamAddDto.setUser(jwtTokenProvider.decodeToken(accessToken));
        // 팀에서 가지고 있는 포인트를 가져와 - item에서 가격을 가져와서 빼기
        // 0이하면 thorw
        // 아니면 뺀 값을 팀에 다시 저장
        Team team;
        if(teamAddDto.getLogo()==null){
            team = Team.builder()
                    .name(teamAddDto.getName())
                    .gugun(teamAddDto.getGugun())
                    .description(teamAddDto.getDescription())
                    .winCount(0)
                    .loseCount(0)
                    .winningStreak(0)
                    .point(0)
                    .mmr(0)
                    .build();
        }else{
            team = Team.builder()
                    .name(teamAddDto.getName())
                    .gugun(teamAddDto.getGugun())
                    .description(teamAddDto.getDescription())
                    .winCount(0)
                    .loseCount(0)
                    .winningStreak(0)
                    .point(0)
                    .mmr(0)
                    .logo(teamAddDto.getLogo())
                    .build();
        }


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

    public List<TeamMatchListDto> getTeamById(String accessToken){
        try{
            Long userNo = jwtTokenProvider.decodeToken(accessToken);
            List<TeamMatchListDto> list = teamRepo.findAllListById(userNo);
            return list;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    public List<Team> getTeamList(){
        return teamRepo.findAll();

    }
    public List<Team> getTeamByGugun(Byte gugun){
        return teamRepo.findByGugun(gugun);

    }


    public TeamListDto getTeamDetail(String teamName){
        return TeamListDto.fromEntity(teamRepo.findByName(teamName));
    }
}
