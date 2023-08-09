package com.passion.ballulala.service;

import com.passion.ballulala.dto.JwtTokenDto;
import com.passion.ballulala.dto.UserDto;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.jwt.JwtTokenProvider;
import com.passion.ballulala.repo.UserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.security.config.annotation.authentication.builders.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    final UserRepo userRepo;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;

    //로그인하기
    public JwtTokenDto login(UserDto user){

        User loginUser;

        try{
            loginUser =  userRepo.findByEmail(user.getEmail());
            if(!user.getPassword().equals(loginUser.getPassword())){
                return null;
            }
            Long userNo = loginUser.getId();

            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(""+userNo,loginUser.getPassword());
            Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
            JwtTokenDto jwtTokenDto = jwtTokenProvider.generateToken(authentication);
            return jwtTokenDto;
        }catch(Exception e) {
            return null;
        }
    }

//    @Transactional
//    public boolean saveRefreshToken(Long userNo, String refreshToken){
//        try{
//            User user = userRepo.findById(userNo)
//                    .orElseThrow(() -> new NoSuchElementException("유저 조회가 ㄴㄴ"));
//
//            System.out.println("조회는 됨");
//            user.setRefreshtoken(refreshToken);
//            return true;
//        }
//        catch(Exception e){
//            System.out.println(e.getMessage());
//            return false;
//        }
//    }

    public Long findByRefreshtoken(String refreshToken){
        User user = userRepo.findByRefreshtoken(refreshToken);
        return user.getId();
    }

    //회원가입 하기
    public boolean signUp(UserDto userDto){
        User user = userDto.toEntity();
        userRepo.save(user);
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
