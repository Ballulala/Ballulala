package com.passion.ballulala.repo;

import com.passion.ballulala.dto.FreeBoardListDto;
import com.passion.ballulala.dto.HighlightListDto;
import com.passion.ballulala.entity.Highlight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HighlightRepo extends JpaRepository<Highlight, Long> {
    @Query("SELECT new com.passion.ballulala.dto.HighlightListDto(u.nickname, h.title, h.videoLink, h.id) " +
            "FROM Highlight h JOIN h.userId u order by h.id desc")
    List<HighlightListDto> findAllList();
}
