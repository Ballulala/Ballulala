package com.passion.ballulala.controller;

import com.passion.ballulala.dto.UserDto;
import com.passion.ballulala.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody UserDto user) {
        ResponseDto<HashMap<String, String>> response = new ResponseDto<>();

        try {
            UserDto loginUser = userService.login(user);
            if (loginUser == null) { //해당 아이디와 비밀번호의 유저를 조회할 수 없음.
                response.setState("FAIL");
                response.setMessage("아이디 혹은 비밀번호가 일치하지 않습니다.");
                return new ResponseEntity<ResponseDto<UserDto>>(response, HttpStatus.OK);
            } else { //정상적으로 로그인이 진행됨.
                response.setState("SUCCESS");
                response.setMessage("정상적으로 로그인이 되었습니다.");
                response.setData(loginUser);
                return new ResponseEntity<ResponseDto<UserDto>>(response, HttpStatus.OK);
            }
        }catch(Exception e){ //로그인 중 의문의 오류 발생.
            response.setState("FAIL");
            response.setMessage("로그인 중 오류가 발생하였습니다.");
            return return new ResponseEntity<ResponseDto<UserDto>>(response, HttpStatus.OK);
        }
    }
}
