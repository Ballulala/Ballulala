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

    
    //로그인하기
    public Long login(UserDto user){

        User loginUser;

        try{
            loginUser =  userRepo.findByEmail(user.getEmail());
            if(!user.getPassword().equals(loginUser.getPassword())){
                return -1L;
            }
            return loginUser.getId();
        }catch(Exception e) {
            return -1L;
        }
    }
    
    //회원가입 하기
    public boolean signUp(UserDto userDto){
        System.out.println("왜안되노 씨바라");
        User user = userDto.toEntity();
        System.out.println("왜안되노 씨바라");
        userRepo.save(user);
        System.out.println("왜안되노 씨바라");
        return true;
    }

    //이메일 중복 체크
    public boolean emailCheck(String email){
        User user ;
        user = userRepo.findByEmail(email);
        if(user==null){
            return true;
        }
        return false;
    }

    //닉네임 중복 체크
    public boolean nicknameCheck(String nickname){
        User user;
        user = userRepo.findByNickname(nickname);
        if(user==null){
            return true;
        }
        return false;
    }

    //휴대폰 번호 중복 체크
    public boolean phoneNumberCheck(String phoneNumber){
        User user;
        user = userRepo.findByPhoneNumber(phoneNumber);
        if(user==null){
            return true;
        }
        return false;
    }
}
