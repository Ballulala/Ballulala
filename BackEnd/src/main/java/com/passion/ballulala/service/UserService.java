package com.passion.ballulala.service;

import com.passion.ballulala.dto.UserDto;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.repo.UserRepo;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    UserRepo userRepo;

    public Long login(UserDto user){

        User loginUser = null;
        loginUser = userRepo.findByEmail(user.getEmail());

        if(loginUser==null) {
            return -1L;
        }else{
            if(user.getPassword()!=loginUser.getPassword()){
                return -1L;
            }
            return loginUser.getId();
        }
    }
}
