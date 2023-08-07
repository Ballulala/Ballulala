package com.passion.ballulala.service;

import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.Stadium;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.repo.MatchRepo;
import com.passion.ballulala.repo.StadiumRepo;
import com.passion.ballulala.repo.TeamRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MatchService {

    private final MatchRepo matchRepo;
    private final TeamRepo teamRepo;
    private final UserRepo userRepo;
    private final StadiumRepo stadiumRepo;
    @Transactional
    public void saveMatch(MatchAddDto matchDto){


        Team team1 = teamRepo.getReferenceById(matchDto.getTeam1());
        System.out.println(1);
        Team team2 = teamRepo.getReferenceById(matchDto.getTeam2());
        System.out.println(2);
        Team team3 = teamRepo.getReferenceById(matchDto.getTeam3());
        System.out.println(3);
        User manager = userRepo.getReferenceById(matchDto.getManager());
        System.out.println(4);
        Stadium stadium = stadiumRepo.getReferenceById(matchDto.getStadium());
        System.out.println(5);
        Match match = Match.builder()
                    .matchDate(matchDto.getMatchDate()) //그날짜에
                    .team1(team1)
                    .team2(team2)
                    .team3(team3)
                    .time(matchDto.getTime()) // 그 시간을 사용자가 입력 하는거거든
                    .manager(manager)
                    .stadium(stadium)
                    .state(matchDto.getState())
                    .build();

        matchRepo.save(match);
    }

    public List<Match> getMatchesByDate(LocalDateTime matchDate, Byte state) {
        return matchRepo.findAllByMatchDateAndState(matchDate, state);
    }

}
