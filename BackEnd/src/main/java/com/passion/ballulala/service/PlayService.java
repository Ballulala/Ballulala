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
        double reult = 1;
        double[] up;
        double t1=0, t2=0, t3=0;
        Play play1 = playRepo.getReferenceById(playResultDto.getId1());
        Team team11 = play1.getTeam1();
        Team team12 = play1.getTeam2();
        play1.setTeamScore1(playResultDto.getTeamScore11());
        play1.setTeamScore2(playResultDto.getTeamScore12());
        if(playResultDto.getTeamScore11()>playResultDto.getTeamScore12()){
            up=calculateNewRatings(team11.getMmr(),team12.getMmr(),1);
        }
        else if(playResultDto.getTeamScore11()<playResultDto.getTeamScore12()){
            up=calculateNewRatings(team11.getMmr(),team12.getMmr(),0);
        }
        else{
            up=calculateNewRatings(team11.getMmr(),team12.getMmr(),0.5);
        }
        t1+=up[0];
        t2+=up[1];
        Play play2 = playRepo.getReferenceById(playResultDto.getId2());
        Team team21 = play2.getTeam1();
        Team team22 = play2.getTeam2();
        play2.setTeamScore1(playResultDto.getTeamScore21());
        play2.setTeamScore2(playResultDto.getTeamScore22());
        if(playResultDto.getTeamScore21()>playResultDto.getTeamScore22()){
            up=calculateNewRatings(team21.getMmr(),team22.getMmr(),1);
        }
        else if(playResultDto.getTeamScore21()<playResultDto.getTeamScore22()){
            up=calculateNewRatings(team21.getMmr(),team22.getMmr(),0);
        }
        else{
            up=calculateNewRatings(team21.getMmr(),team22.getMmr(),0.5);
        }
        t1+=up[0];
        t3+=up[1];
        Play play3 = playRepo.getReferenceById(playResultDto.getId3());
        Team team31 = play3.getTeam1();
        Team team32 = play3.getTeam2();
        play3.setTeamScore1(playResultDto.getTeamScore31());
        play3.setTeamScore2(playResultDto.getTeamScore32());
        if(playResultDto.getTeamScore31()>playResultDto.getTeamScore32()){
            up=calculateNewRatings(team31.getMmr(),team32.getMmr(),1);
        }
        else if(playResultDto.getTeamScore31()<playResultDto.getTeamScore32()){
            up=calculateNewRatings(team31.getMmr(),team32.getMmr(),0);
        }
        else{
            up=calculateNewRatings(team31.getMmr(),team32.getMmr(),0.5);
        }
        t2+=up[0];
        t3+=up[1];
        Play play4 = playRepo.getReferenceById(playResultDto.getId4());
        Team team41 = play4.getTeam1();
        Team team42 = play4.getTeam2();
        play4.setTeamScore1(playResultDto.getTeamScore41());
        play4.setTeamScore2(playResultDto.getTeamScore42());
        if(playResultDto.getTeamScore41()>playResultDto.getTeamScore42()){
            up=calculateNewRatings(team41.getMmr(),team42.getMmr(),1);
        }
        else if(playResultDto.getTeamScore41()<playResultDto.getTeamScore42()){
            up=calculateNewRatings(team41.getMmr(),team42.getMmr(),0);
        }
        else{
            up=calculateNewRatings(team41.getMmr(),team42.getMmr(),0.5);
        }
        t1+=up[0];
        t2+=up[1];
        Play play5 = playRepo.getReferenceById(playResultDto.getId5());
        Team team51 = play5.getTeam1();
        Team team52 = play5.getTeam2();
        play5.setTeamScore1(playResultDto.getTeamScore51());
        play5.setTeamScore2(playResultDto.getTeamScore52());
        if(playResultDto.getTeamScore51()>playResultDto.getTeamScore52()){
            up=calculateNewRatings(team51.getMmr(),team52.getMmr(),1);
        }
        else if(playResultDto.getTeamScore51()<playResultDto.getTeamScore52()){
            up=calculateNewRatings(team51.getMmr(),team52.getMmr(),0);
        }
        else{
            up=calculateNewRatings(team51.getMmr(),team52.getMmr(),0.5);
        }
        t1+=up[0];
        t3+=up[1];
        Play play6 = playRepo.getReferenceById(playResultDto.getId6());
        Team team61 = play6.getTeam1();
        Team team62 = play6.getTeam2();
        play6.setTeamScore1(playResultDto.getTeamScore61());
        play6.setTeamScore2(playResultDto.getTeamScore62());
        if(playResultDto.getTeamScore61()>playResultDto.getTeamScore62()){
            up=calculateNewRatings(team61.getMmr(),team62.getMmr(),1);
        }
        else if(playResultDto.getTeamScore61()<playResultDto.getTeamScore62()){
            up=calculateNewRatings(team61.getMmr(),team62.getMmr(),0);
        }
        else{
            up=calculateNewRatings(team61.getMmr(),team62.getMmr(),0.5);
        }
        t2+=up[0];
        t3+=up[1];
        Team teamUp1 = play1.getTeam1();
        Team teamUp2 = play1.getTeam2();
        Team teamUp3 = play2.getTeam2();
        teamUp1.setMmr((int)(teamUp1.getMmr()+t1));
        teamUp2.setMmr((int)(teamUp2.getMmr()+t2));
        teamUp3.setMmr((int)(teamUp3.getMmr()+t3));
    }

    public static double dynamicKFactor(double rating) {
        if (rating < 2000) {
            return 20;
        } else {
            return 10;
        }
    }

    public static double[] calculateNewRatings(double player1Rating, double player2Rating, double result) {
        double k1 = dynamicKFactor(player1Rating);
        double k2 = dynamicKFactor(player2Rating);

        double expectedOutcome1 = 1 / (1 + Math.pow(10, (player2Rating - player1Rating) / 400));
        double expectedOutcome2 = 1 / (1 + Math.pow(10, (player1Rating - player2Rating) / 400));

        double updatedPlayer1Rating = k1 * (result - expectedOutcome1);
        double updatedPlayer2Rating = k2 * ((1 - result) - expectedOutcome2);

        return new double[]{updatedPlayer1Rating, updatedPlayer2Rating};
    }
}


