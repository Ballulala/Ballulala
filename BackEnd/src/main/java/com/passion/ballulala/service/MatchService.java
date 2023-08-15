package com.passion.ballulala.service;

import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.dto.TeamListDto;
import com.passion.ballulala.dto.TeamMatchListDto;
import com.passion.ballulala.entity.*;
import com.passion.ballulala.jwt.JwtTokenProvider;
import com.passion.ballulala.repo.*;
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
    private final JwtTokenProvider jwtTokenProvider;
    private final PlayRepo playRepo;
    private final PlayService playService;
    @Transactional


    public void saveMatch(MatchAddDto matchDto){
        Team team = teamRepo.findByName(matchDto.getTeam());
        System.out.println(matchDto);
        Stadium stadium = stadiumRepo.getReferenceById(matchDto.getStadium());
        String[] args = matchDto.getMatchDate().split("-");
        LocalDateTime date = (LocalDateTime.of(Integer.parseInt(args[0]), Integer.parseInt(args[1]),Integer.parseInt(args[2]),0,0,0));
        Match existingMatch = matchRepo.findByMatchDateAndTimeAndStadium_Id(date, matchDto.getTime(), matchDto.getStadium());
        if(existingMatch==null){
            Match match = Match.builder()
                    .matchDate(date) //그날짜에
                    .team1(team)
                    .team2(null)
                    .team3(null)
                    .time(matchDto.getTime()) // 그 시간을 사용자가 입력 하는거거든
//                    .manager(manager)
                    .stadium(stadium)
                    .state((byte) 0)
                    .build();
            matchRepo.save(match);
        }
        else {

            if (existingMatch.getTeam2() == null) {
                // Update Team2
                existingMatch.setTeam2(team);
                existingMatch.setTime(matchDto.getTime());
//                existingMatch.setManager(manager);
//                existingMatch.setState(matchDto.getState());

                matchRepo.save(existingMatch);
            } else if (existingMatch.getTeam3() == null) {
                // Update Team3
                existingMatch.setTeam3(team);
                existingMatch.setTime(matchDto.getTime());
//                existingMatch.setManager(manager);
//                existingMatch.setState(matchDto.getState());

                matchRepo.save(existingMatch);
                playService.saveMatch(existingMatch.getTeam1(),existingMatch.getTeam2(),existingMatch.getTeam3(),existingMatch);

            }
            else{
                System.out.println("already full");
            }
            // Update other fields if needed
        }
    }

    public List<Match> getMatchesByDateFull(LocalDateTime matchDate) {
        return matchRepo.findByMatchDateAndTeam3IsNotNull(matchDate);

    }public List<Match> getMatchesByDateLess(LocalDateTime matchDate) {
        return matchRepo.findByMatchDateAndTeam3IsNull(matchDate);

    }
//    public List<Match> getMatchesByDate(LocalDateTime matchDate, Byte state) {
//
//            return matchRepo.findAllListByMatchDateAndState(matchDate, state);
//
//    }

    public List<TeamMatchListDto> getTeamById(String accessToken){

        Long userNo = jwtTokenProvider.decodeToken(accessToken);
        return teamRepo.findAllListById(userNo);
    }

}
