package com.passion.ballulala.repo;

import com.passion.ballulala.entity.TeamUser;
import com.passion.ballulala.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepo extends JpaRepository<User,Long> {
    User findByEmail(String email);
    User findByPhoneNumber(String phoneNumber);
    User findByNickname(String nickname);
    User findByRefreshtoken(String refreshToken);

    @Query("SELECT tu FROM TeamUser tu WHERE tu.user.id = :userNo AND tu.team.id = :teamId")
    TeamUser getUserState(Long userNo, Long teamId);

}
