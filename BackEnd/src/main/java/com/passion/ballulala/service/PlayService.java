package com.passion.ballulala.service;

import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.dto.PlayDto;
import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.Play;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.repo.PlayRepo;
import com.passion.ballulala.repo.TeamRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PlayService {

    private final PlayRepo playRepo;
    private final TeamRepo teamRepo;

    public void saveMatch(Team team1, Team team2, Team team3, Match match){
        System.out.println(666666);
        Play play1 = Play.builder()
                .team1(team1)
                .team2(team2)
                .order(1)
                .teamScore1(0)
                .teamScore2(0)
                .match(match)
                .build();
        playRepo.save(play1);


        Play play2 = Play.builder()
                .team1(team1)
                .team2(team3)
                .order(2)
                .teamScore1(0)
                .teamScore2(0)
                .match(match)
                .build();
        playRepo.save(play2);

        Play play3 = Play.builder()
                .team1(team2)
                .team2(team3)
                .order(3)
                .teamScore1(0)
                .teamScore2(0)
                .match(match)
                .build();
        playRepo.save(play3);

        Play play4 = Play.builder()
                .team1(team1)
                .team2(team2)
                .order(4)
                .teamScore1(0)
                .teamScore2(0)
                .match(match)
                .build();
        playRepo.save(play4);

        Play play5 = Play.builder()
                .team1(team1)
                .team2(team3)
                .order(5)
                .teamScore1(0)
                .teamScore2(0)
                .match(match)
                .build();
        playRepo.save(play5);

        Play play6 = Play.builder()
                .team1(team2)
                .team2(team3)
                .order(6)
                .teamScore1(0)
                .teamScore2(0)
                .match(match)
                .build();
        playRepo.save(play6);
    }

    public List<Play> getPlauList(Long match) {
        return playRepo.findByMatch_Id(match);

    }

}
