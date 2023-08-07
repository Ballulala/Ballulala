package com.passion.ballulala.repo;

import com.passion.ballulala.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface MatchRepo extends JpaRepository<Match, Long> {
        List<Match> findAllByMatchDateAndState(LocalDateTime matchDate, Byte state);
}
