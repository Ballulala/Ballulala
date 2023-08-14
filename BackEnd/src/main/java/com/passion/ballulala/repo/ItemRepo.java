package com.passion.ballulala.repo;//package com.passion.ballulala.repo;
//
//import com.passion.ballulala.entity.Item;
//import jakarta.persistence.EntityManager;
//import jakarta.persistence.PersistenceContext;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//@RequiredArgsConstructor
//public class ItemRepo {
//
//    @PersistenceContext
//    private final EntityManager em;
//
//    public void save(Item item) {
//        if(item.getId() == null) {
//            em.persist(item);
//        } else {
//            em.merge(item);
//        }
//    }
//
//    public Item findOne(Long id) {
//        return em.find(Item.class, id);
//    }
//
//    public List<Item> findAll() {
//        return em.createQuery("select i from Item i", Item.class)
//                .getResultList();
//    }
//
//
//
//}

import com.passion.ballulala.entity.Item;
import com.passion.ballulala.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ItemRepo extends JpaRepository<Item, Long> {

}
