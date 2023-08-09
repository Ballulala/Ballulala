package com.passion.ballulala.repo;

import com.passion.ballulala.entity.FreeBoardReply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FreeBoardReplyRepo extends JpaRepository<FreeBoardReply,Long> {
}
