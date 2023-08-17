package com.passion.ballulala.repo;

import com.passion.ballulala.dto.TeamUserDto;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.TeamUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeamUserRepo extends JpaRepository<TeamUser, Long> {

    List<TeamUser> findByTeam_IdAndState(Long team, Byte state );
    TeamUser findByTeam_IdAndUser_Id(Long team, Long user);
    void delete(TeamUser user);
}
