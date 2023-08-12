package com.passion.ballulala.repo;

import com.passion.ballulala.dto.FreeBoardReplyListDto;
import com.passion.ballulala.dto.MercenaryReplyListDto;
import com.passion.ballulala.entity.MercenaryReply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MercenaryReplyRepo extends JpaRepository<MercenaryReply, Long> {

    @Query("SELECT new com.passion.ballulala.dto.MercenaryReplyListDto(m.id, u.nickname, m.createTime, m.content, u.id) " +
            "FROM MercenaryReply m JOIN m.userId u where m.mercenary.id = ?1 order by m.id desc")
    List<MercenaryReplyListDto> findAllList(Long mercenaryId);
}
