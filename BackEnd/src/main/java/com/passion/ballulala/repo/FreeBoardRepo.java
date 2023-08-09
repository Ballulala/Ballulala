package com.passion.ballulala.repo;

import com.passion.ballulala.dto.FreeBoardDto;
import com.passion.ballulala.dto.FreeBoardListDto;
import com.passion.ballulala.entity.FreeBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FreeBoardRepo extends JpaRepository<FreeBoard, Long> {

    @Query("SELECT new com.passion.ballulala.dto.FreeBoardListDto(f.id, f.title, f.createTime, u.nickname) " +
            "FROM FreeBoard f JOIN f.userId u order by f.id desc")
    List<FreeBoardListDto> findAllList();
}