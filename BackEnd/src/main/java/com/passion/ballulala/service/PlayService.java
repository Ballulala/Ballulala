package com.passion.ballulala.service;

import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.dto.PlayDto;
import com.passion.ballulala.dto.PlayResultDto;
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
    @Transactional
    public void saveResult(PlayResultDto playResultDto){
        Play play1 = playRepo.getReferenceById(playResultDto.getId1());
        play1.setTeamScore1(playResultDto.getTeamScore11());
        play1.setTeamScore2(playResultDto.getTeamScore12());
//        playRepo.save(play1);
        Play play2 = playRepo.getReferenceById(playResultDto.getId2());
        play2.setTeamScore1(playResultDto.getTeamScore21());
        play2.setTeamScore2(playResultDto.getTeamScore22());
//        playRepo.save(play2);
        Play play3 = playRepo.getReferenceById(playResultDto.getId3());
        play3.setTeamScore1(playResultDto.getTeamScore31());
        play3.setTeamScore2(playResultDto.getTeamScore32());
//        playRepo.save(play3);
        Play play4 = playRepo.getReferenceById(playResultDto.getId4());
        play4.setTeamScore1(playResultDto.getTeamScore41());
        play4.setTeamScore2(playResultDto.getTeamScore42());
//        playRepo.save(play4);
        Play play5 = playRepo.getReferenceById(playResultDto.getId5());
        play5.setTeamScore1(playResultDto.getTeamScore51());
        play5.setTeamScore2(playResultDto.getTeamScore52());
//        playRepo.save(play5);
        Play play6 = playRepo.getReferenceById(playResultDto.getId6());
        play6.setTeamScore1(playResultDto.getTeamScore61());
        play6.setTeamScore2(playResultDto.getTeamScore62());
//        playRepo.save(play6);
    }

}
