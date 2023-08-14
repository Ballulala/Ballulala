package com.passion.ballulala.repo;

import com.passion.ballulala.dto.ConsultBoardListDto;
import com.passion.ballulala.dto.FreeBoardListDto;
import com.passion.ballulala.entity.ConsultBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsultBoardRepo extends JpaRepository<ConsultBoard, Long> {
    @Query("SELECT new com.passion.ballulala.dto.ConsultBoardListDto(u.nickname, c.title, c.videoLink, c.id) " +
            "FROM ConsultBoard c JOIN c.userId u order by c.id desc")
    List<ConsultBoardListDto> findAllList();

//    @Query("SELECT new com.passion.ballulala.dto.FreeBoardListDto(f.id, f.title, f.createTime, u.nickname) " +
//            "FROM FreeBoard f JOIN f.userId u order by f.id desc")
//    List<FreeBoardListDto> findAllList();

    @Modifying
    @Query("update FreeBoard f set f.hit = f.hit + 1 where f.id = ?1")
    void updateHits(Long id);
}