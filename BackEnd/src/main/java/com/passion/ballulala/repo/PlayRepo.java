package com.passion.ballulala.repo;

import com.passion.ballulala.entity.Play;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayRepo extends JpaRepository<Play, Long> {
}
