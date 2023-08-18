package com.passion.ballulala.repo;

import com.passion.ballulala.dto.FreeBoardListDto;
import com.passion.ballulala.dto.FreeBoardReplyListDto;
import com.passion.ballulala.entity.FreeBoardReply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FreeBoardReplyRepo extends JpaRepository<FreeBoardReply,Long> {
    @Query("SELECT new com.passion.ballulala.dto.FreeBoardReplyListDto(f.id, u.nickname, f.createTime, f.content, u.id) " +
            "FROM FreeBoardReply f JOIN f.userId u where f.board.id = ?1 order by f.id desc")
    List<FreeBoardReplyListDto> findAllList(Long freeBoardId);
}
