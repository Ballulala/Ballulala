package com.passion.ballulala.repo;

import com.passion.ballulala.entity.FreeBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FreeBoardRepo extends JpaRepository<FreeBoard, Long> {

}
