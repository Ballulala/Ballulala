package com.passion.ballulala.repo;

import com.passion.ballulala.dto.ConsultBoardAnswerListDto;
import com.passion.ballulala.dto.ConsultBoardListDto;
import com.passion.ballulala.entity.ConsultBoardAnswer;
import com.passion.ballulala.entity.FreeBoardReply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsultBoardAnswerRepo extends JpaRepository<ConsultBoardAnswer,Long> {
    @Query("SELECT new com.passion.ballulala.dto.ConsultBoardAnswerListDto(c.id, c.comment, c.createTime, u.nickname) " +
            "FROM ConsultBoardAnswer c JOIN c.user u order by c.id desc")
    List<ConsultBoardAnswerListDto> findAllList();
}
