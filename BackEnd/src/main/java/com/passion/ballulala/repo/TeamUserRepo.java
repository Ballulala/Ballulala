package com.passion.ballulala.repo;

import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.TeamUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamUserRepo extends JpaRepository<TeamUser, Long> {
}
