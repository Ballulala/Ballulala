package com.passion.ballulala.service;

import com.passion.ballulala.dto.UserDto;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    final UserRepo userRepo;

    public Long login(UserDto user){

        User loginUser;

        try{
            loginUser =  userRepo.findByEmail(user.getEmail());
            if(!user.getPassword().equals(loginUser.getPassword())){
                return -1L;
            }
            return loginUser.getId();
        }catch(Exception e) {
            System.out.println("서비스에서 오류남");
            System.out.println("e.getMessage() = " + e.getMessage());
            return -1L;
        }
    }
}
