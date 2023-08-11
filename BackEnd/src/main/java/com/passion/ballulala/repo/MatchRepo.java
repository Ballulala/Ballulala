package com.passion.ballulala.repo;

import com.passion.ballulala.dto.MatchLoadDto;
import com.passion.ballulala.dto.TeamMatchListDto;
import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.TeamUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface MatchRepo extends JpaRepository<Match, Long> {
//        List<Match> findAllListByMatchDateAndState(LocalDateTime matchDate, Byte state);
        List<Match> findByMatchDate(LocalDateTime matchDate);
        Match findByMatchDateAndTimeAndStadium_Id(LocalDateTime matchDate, Integer time, Long stadium);
//        Match findByMatchDateAndTimeAndStadium_Id(LocalDateTime matchDate, Integer time, Long stadium);
}
