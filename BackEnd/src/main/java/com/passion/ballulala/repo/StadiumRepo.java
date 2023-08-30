package com.passion.ballulala.repo;

import com.passion.ballulala.entity.Stadium;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StadiumRepo extends JpaRepository<Stadium, Long> {
}
