package com.passion.ballulala.repo;

import com.passion.ballulala.dto.MercenaryListDto;
import com.passion.ballulala.entity.Mercenary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MercenaryRepo extends JpaRepository<Mercenary, Long> {

    @Query("SELECT new com.passion.ballulala.dto.MercenaryListDto(m.id, m.title, m.createTime, u.nickname) " +
            "FROM Mercenary m JOIN m.userId u order by m.id desc")
    List<MercenaryListDto> findAllList();

    @Modifying
    @Query("update Mercenary m set m.hit = m.hit + 1 where m.id = ?1")
    void updateHits(Long id);
}