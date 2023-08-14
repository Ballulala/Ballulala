package com.passion.ballulala.repo;//package com.passion.ballulala.repo;
import com.passion.ballulala.dto.TeamItemBuyListDto;
import com.passion.ballulala.entity.TeamItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamItemRepo extends JpaRepository<TeamItem, Long> {


//    @Query("SELECT t.id, t.point, i.logo, i.img " +
//            "FROM Team t JOIN Item i ON t.item = i")
@Query("SELECT distinct new com.passion.ballulala.dto.TeamItemBuyListDto(ti.id, ti.team.point, ti.item.img) " +
        "FROM TeamItem ti WHERE ti.team.id = ?1")
    List<TeamItemBuyListDto> findAllList(Long id);
}





