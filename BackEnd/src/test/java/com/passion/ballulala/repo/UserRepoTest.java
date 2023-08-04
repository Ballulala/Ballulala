//package com.passion.ballulala.repo;
//
//import com.passion.ballulala.entity.User;
//import jakarta.persistence.EntityManager;
//import jakarta.persistence.PersistenceContext;
//import jakarta.transaction.Transactional;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.annotation.Rollback;
//
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//@SpringBootTest
//@Transactional
//@Rollback(value = false)
//class UserRepoTest {
//
//    @PersistenceContext
//    EntityManager em;
//
//    @Autowired
//    UserRepo userRepo;
//    private java.time.format.DateTimeFormatter DateTimeFormatter;
//
//    @Test
//    public void test(){
//        User user = new User();
//        user.setEmail("신병찬");
//        user.setName("신병찬");
//        user.setNickname("신병찬");
//        user.setPassword("신병찬");
//        em.persist(user);
//
//        User user1 = userRepo.findByEmail(user.getEmail());
//        System.out.println("user1 = " + user1.getName());
//
//    }
//}