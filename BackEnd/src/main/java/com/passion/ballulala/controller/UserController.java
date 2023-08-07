package com.passion.ballulala.controller;

import com.passion.ballulala.dto.ResponseDto;
import com.passion.ballulala.dto.UserDto;
import com.passion.ballulala.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody UserDto user) {
        ResponseDto<Long> response = new ResponseDto<Long>();

        try {
            Long userNo = userService.login(user);
            if (userNo == -1L) { //해당 아이디와 비밀번호의 유저를 조회할 수 없음.
                response.setState("FAIL");
                response.setMessage("아이디 혹은 비밀번호가 일치하지 않습니다.");
                return new ResponseEntity<ResponseDto<Long>>(response, HttpStatus.OK);
            } else { //정상적으로 로그인이 진행됨.
                response.setState("SUCCESS");
                response.setMessage("정상적으로 로그인이 되었습니다.");
                response.setData(userNo);
                return new ResponseEntity<ResponseDto<Long>>(response, HttpStatus.OK);
            }
        }catch(Exception e){ //로그인 중 의문의 오류 발생.
            response.setState("FAIL");
            response.setMessage("로그인 중 오류가 발생하였습니다.");
            return new ResponseEntity<ResponseDto<Long>>(response, HttpStatus.OK);
        }
    }

    @PostMapping(value = "/signUp")
    public ResponseEntity<?> signUp(@RequestBody UserDto user) {
        ResponseDto<Boolean> response = new ResponseDto<Boolean>();
        //이메일, 닉네임, 비밀번호, 이름, 생년월일, 휴대폰 번호, 성별
        //시도, 구군
        try {
            System.out.println("들어가기전");
            userService.signUp(user);
            response.setState("SUCCESS");
            response.setMessage("회원가입을 완료하였습니다.");
            return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
        }catch(Exception e){ //로그인 중 의문의 오류 발생.
            response.setState("FAIL");
            response.setMessage("회원가입 중 오류가 발생하였습니다.");
            return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
        }
    }

    @PostMapping(value = "/logout")
    public ResponseEntity<?> logout(@RequestBody UserDto user) {
        ResponseDto<Boolean> response = new ResponseDto<Boolean>();
        //이메일, 닉네임, 비밀번호, 이름, 생년월일, 휴대폰 번호, 성별
        //시도, 구군
        try {
            System.out.println("들어가기전");
            userService.signUp(user);
            response.setState("SUCCESS");
            response.setMessage("회원가입을 완료하였습니다.");
            return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
        }catch(Exception e){ //로그인 중 의문의 오류 발생.
            response.setState("FAIL");
            response.setMessage("회원가입 중 오류가 발생하였습니다.");
            return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
        }
    }

    @PostMapping(value = "/signUp/emailCheck")
    public ResponseEntity<?> emailCheck(@RequestBody UserDto user) {
        ResponseDto<Boolean> response = new ResponseDto<Boolean>();
        //이메일 중복 체크, false -> 가입 불가, true -> 가입 가능
        try {
            boolean check = userService.emailCheck(user.getEmail());
            if (!check) { //중복 없음.
                response.setState("FAIL");
                response.setMessage("중복된 이메일이 존재합니다.");
                return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
            } else { //정상적으로 로그인이 진행됨.
                response.setState("SUCCESS");
                response.setMessage("사용 가능한 이메일입니다.");
                return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
            }
        }catch(Exception e){ //로그인 중 의문의 오류 발생.
            response.setState("FAIL");
            response.setMessage("중복 체크 중 오류가 발생했습니다.");
            return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
        }
    }

    @PostMapping(value = "/signUp/nicknameCheck")
    public ResponseEntity<?> nicknameCheck(@RequestBody UserDto user) {
        ResponseDto<Boolean> response = new ResponseDto<Boolean>();
        try {
            boolean check = userService.nicknameCheck(user.getNickname());
            System.out.println(user.getNickname());
            //닉네임 중복 체크, false -> 가입 불가, true -> 가입 가능
            if (!check) { //해당 아이디와 비밀번호의 유저를 조회할 수 없음.
                response.setState("FAIL");
                response.setMessage("중복된 닉네임이 존재합니다.");
                return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
            } else { //정상적으로 로그인이 진행됨.
                response.setState("SUCCESS");
                response.setMessage("사용 가능한 닉네임입니다.");
                return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
            }
        }catch(Exception e){ //로그인 중 의문의 오류 발생.
            response.setState("FAIL");
            response.setMessage("중복 체크 중 오류가 발생했습니다.");
            return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
        }
    }

    @PostMapping(value = "/signUp/phoneNumberCheck")
    public ResponseEntity<?> phoneNumberCheck(@RequestBody UserDto user) {
        ResponseDto<Boolean> response = new ResponseDto<Boolean>();
        try {
            boolean check = userService.phoneNumberCheck(user.getPhoneNumber());
            System.out.println(user.getPhoneNumber());
            //휴대폰 번호 중복 체크, false -> 가입 불가, true -> 가입 가능
            if (!check) { //해당 아이디와 비밀번호의 유저를 조회할 수 없음.
                response.setState("FAIL");
                response.setMessage("중복된 휴대폰 번호가 존재합니다.");
                return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
            } else { //정상적으로 로그인이 진행됨.
                response.setState("SUCCESS");
                response.setMessage("사용 가능한 휴대폰 번호입니다.");
                return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
            }
        } catch (Exception e) { //로그인 중 의문의 오류 발생.
            response.setState("FAIL");
            response.setMessage("중복 체크 중 오류가 발생했습니다.");
            return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
        }
    }
}

