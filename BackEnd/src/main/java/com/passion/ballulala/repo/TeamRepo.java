package com.passion.ballulala.repo;


import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepo extends JpaRepository<Team, Long> {
    Team findByName(String name);
//    List<Team> finAlldIdNameSidoGugunByList();
//    Team findById(Long id)
}
