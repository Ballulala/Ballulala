package com.passion.ballulala.repo;

import com.passion.ballulala.entity.PersonalMatchUser;
import com.passion.ballulala.entity.PersonalMatchUserId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalMatchUserRepo extends JpaRepository<PersonalMatchUser, PersonalMatchUserId> {
}
