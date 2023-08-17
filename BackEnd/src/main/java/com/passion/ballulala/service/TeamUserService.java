package com.passion.ballulala.service;

import com.passion.ballulala.dto.TeamUserDto;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.TeamUser;
import com.passion.ballulala.jwt.JwtTokenProvider;
import com.passion.ballulala.repo.TeamRepo;
import com.passion.ballulala.repo.TeamUserRepo;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TeamUserService {

    private final TeamUserRepo teamUserRepo;
    private final UserRepo userRepo;
    private final TeamRepo teamRepo;
    private final JwtTokenProvider jwtTokenProvider;
    @Transactional
    public void saveTeamUser(TeamUserDto teamUserDto, String token){
        long user = jwtTokenProvider.decodeToken(token);
        TeamUser teamUser;
            teamUser = TeamUser.builder()
                    .user(userRepo.getReferenceById(user))
                    .team(teamRepo.getReferenceById(teamUserDto.getTeam()))
                    .state((byte)2)
                    .build();
            teamUserRepo.save(teamUser);
    }

    @Transactional
    public List<TeamUser> teamUserJoinList(Long team){
        return teamUserRepo.findByTeam_IdAndState(team, (byte)2);
    }

    @Transactional
    public void teamUserAllow(Long id){
        TeamUser teamUser = teamUserRepo.getReferenceById(id);
        teamUser.setState((byte)0);
//        teamUserRepo.save(teamUser);
    }

    @Transactional
    public void memberOut(Long teamId, String accessToken) {
        Long userNo = jwtTokenProvider.decodeToken(accessToken);
        try{
            System.out.println(teamId);
            System.out.println(userNo);
            teamUserRepo.deleteByTeam_IdAndUser_Id(teamId, userNo);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
