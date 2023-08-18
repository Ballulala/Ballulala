package com.passion.ballulala.repo;

import com.passion.ballulala.entity.Play;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayRepo extends JpaRepository<Play, Long> {
    List<Play> findByMatch_Id(Long match);



}
