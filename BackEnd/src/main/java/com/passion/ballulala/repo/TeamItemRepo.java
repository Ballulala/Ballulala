package com.passion.ballulala.repo;

import com.passion.ballulala.entity.TeamItem;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class TeamItemRepo {

    private final EntityManager em;
    public void save(TeamItem item) { // 결제
        if(item.getId() == null) {
            em.persist(item);
        } else {
            em.merge(item);
        }
    }
}
