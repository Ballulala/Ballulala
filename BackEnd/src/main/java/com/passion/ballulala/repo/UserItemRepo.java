package com.passion.ballulala.repo;
import com.passion.ballulala.dto.TeamItemBuyListDto;
import com.passion.ballulala.dto.UserItemBuyListDto;
import com.passion.ballulala.entity.TeamItem;
import com.passion.ballulala.entity.UserItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserItemRepo extends JpaRepository<UserItem, Long> {

    @Query("SELECT distinct new com.passion.ballulala.dto.UserItemBuyListDto(ui.id, ui.user.point, ui.item.img) " +
            "FROM UserItem ui WHERE ui.user.id = ?1")
    List<UserItemBuyListDto> findAllList(Long id);
}





