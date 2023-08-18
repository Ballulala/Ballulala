package com.passion.ballulala.repo;

import com.passion.ballulala.dto.TeamUserDto;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.TeamUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TeamUserRepo extends JpaRepository<TeamUser, Long> {

    List<TeamUser> findByTeam_IdAndState(Long team, Byte state );
    TeamUser findByTeam_IdAndUser_Id(Long team, Long user);
    List<TeamUser> findByTeam_IdAndStateNot(Long team, Byte state );
    void delete(TeamUser user);

//    @Query("DELETE FROM TeamUser tu WHERE tu.team.id = :teamId AND tu.user.id = :userNo")
    void deleteByTeam_IdAndUser_Id(Long teamId, Long userId);
}
