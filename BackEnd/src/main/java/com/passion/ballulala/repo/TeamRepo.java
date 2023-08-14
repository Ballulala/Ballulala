package com.passion.ballulala.repo;


import com.passion.ballulala.dto.TeamMatchListDto;
import com.passion.ballulala.entity.Team;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepo extends JpaRepository<Team, Long> {
    Team findByName(String name);
//    List<Team> finAlldIdNameSidoGugunByList();
//    Team findById(Long id)

    @Query("SELECT new com.passion.ballulala.dto.TeamMatchListDto(tu.id, t.name) " +
            "FROM Team t JOIN TeamUser tu ON t = tu.team WHERE tu.user.id = :id")
    List<TeamMatchListDto> findAllListById(Long id);
//    @Query("SELECT t FROM Team t WHERE t.gugun = ?1")
    List<Team>findByGugun(Byte gugun);
    List<Team> findAll();
}
