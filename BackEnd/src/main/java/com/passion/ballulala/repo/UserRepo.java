package com.passion.ballulala.repo;

import com.passion.ballulala.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepo extends JpaRepository<User,Long> {
    User findByEmail(String email);
    User findByPhoneNumber(String phoneNumber);
    User findByNickname(String nickname);
    User findByRefreshtoken(String refreshToken);
}
