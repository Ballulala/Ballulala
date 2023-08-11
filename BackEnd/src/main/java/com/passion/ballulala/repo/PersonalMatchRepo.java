package com.passion.ballulala.repo;

import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.PersonalMatch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface PersonalMatchRepo  extends JpaRepository<PersonalMatch, Long> {

    PersonalMatch findByMatchDateAndTimeAndStadium_Id(LocalDateTime matchDate, Integer time, Long stadium);
}
