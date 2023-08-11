package com.passion.ballulala.repo;


import com.passion.ballulala.dto.TeamListDto;
import com.passion.ballulala.dto.TeamMatchListDto;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.TeamUser;
import com.passion.ballulala.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepo extends JpaRepository<Team, Long> {
    Team findByName(String name);
//    List<Team> finAlldIdNameSidoGugunByList();
//    Team findById(Long id)
    @Query("SELECT new com.passion.ballulala.dto.TeamMatchListDto(tu.id,t.name) " +
            "FROM TeamUser tu JOIN tu.team t order by tu.id desc")
    List<TeamMatchListDto> findAllListById(Long id);
}
