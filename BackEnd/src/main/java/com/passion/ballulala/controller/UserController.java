package com.passion.ballulala.controller;

import com.passion.ballulala.dto.*;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.TeamUser;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.service.TeamService;
import com.passion.ballulala.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.passion.ballulala.exception.ExceptionHandler;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    private final String TOKEN ="Access-Token";
    private UserService userService;
    private TeamService teamService;

    public UserController(UserService userService, TeamService teamService){
        this.userService = userService;
        this.teamService = teamService;
    }

    
    //로그인 부분 구현
    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody UserDto user) {
        ResponseDto<JwtTokenDto> response = new ResponseDto<JwtTokenDto>();

        try {
            JwtTokenDto jwtTokenDto = userService.login(user);
            if (jwtTokenDto == null) { //해당 아이디와 비밀번호의 유저를 조회할 수 없음.
                response.setState("FAIL");
                response.setMessage("아이디 혹은 비밀번호가 일치하지 않습니다.");
                return new ResponseEntity<ResponseDto<JwtTokenDto>>(response, HttpStatus.OK);
            } else { //정상적으로 로그인이 진행됨.
                response.setState("SUCCESS");
                response.setMessage("정상적으로 로그인이 되었습니다.");
                response.setData(jwtTokenDto);

                return new ResponseEntity<ResponseDto<JwtTokenDto>>(response, HttpStatus.OK);
            }
        }catch(Exception e){ //로그인 중 의문의 오류 발생.
            response.setState("FAIL");
            response.setMessage("로그인 중 오류가 발생하였습니다.");
            return new ResponseEntity<ResponseDto<JwtTokenDto>>(response, HttpStatus.OK);
        }
    }

    //회원 마이페이지 조회, 아직 팀 리스트 불러오기 덜 함.
    @GetMapping(value = "myInfo")
    public ResponseEntity<?> myInfo(HttpServletRequest request){

        String accessToken = request.getHeader("Authorization");
        Map<String, Object> map = new HashMap<>();
        try{
            User user = userService.myInfo(accessToken);
            UserDto userDto = UserDto.fromEntity(user);
            List<TeamMatchListDto> teamList = teamService.getTeamById(accessToken);
            map.put("user", userDto);
            map.put("teamList", teamList);
            map.put("state", "SUCCESS");
            map.put("message", "유저 정보 불러오기에 성공하였습니다.");
            return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
        }
        catch(Exception e){
            map.put("state", "FAIL");
            map.put("message", "유저 정보 불러오기는 중 오류가 발생하였습니다.");
            return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
        }
    }


    //수정하기
    @PutMapping(value = "/modify")
    public ResponseEntity<?> modify(@RequestBody UserDto user, HttpServletRequest request) {
        ResponseDto<Boolean> response = new ResponseDto<>();
        try {
            String accessToken = request.getHeader("Authorization");
            Boolean check = userService.modify(user,accessToken);
            if (!check) { //해당 아이디와 비밀번호의 유저를 조회할 수 없음.
                response.setState("FAIL");
                response.setMessage("회원정보 수정에 실패하였습니다.");
                return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
            } else { //정상적으로 로그인이 진행됨.
                response.setState("SUCCESS");
                response.setMessage("회원정보가 성공적으로 수정 되었습니다.");
                return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
            }
        }catch(Exception e){ //로그인 중 의문의 오류 발생.
            response.setState("FAIL");
            response.setMessage("회원정보 수정 중 오류가 발생하였습니다.");
            return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
        }
    }

//    @PostMapping(value = "/refresh")
//    public ResponseEntity<?> login(@RequestBody HashMap<String, String> map) {
//        ResponseDto<String> response = new ResponseDto<String>();
//        String refreshToken = map.get("refreshToken");
//
//        try {
//            Long userNo = userService.findByRefreshtoken(refreshToken);
//
//            response.setState("SUCCESS");
//            response.setMessage("정상적으로 로그인이 진행되었습니다.");
//
//            return new ResponseEntity<ResponseDto<String>>(response, HttpStatus.OK);
//        } catch (Exception e) {
//            response.setState("FAIL");
//            response.setMessage("로그인 도중 오류가 발생했습니다.");
//        }
//    }


    //로그아웃 부분
    @PostMapping(value = "/logout")
    public ResponseEntity<?> logout(@RequestBody UserDto user) {
        ResponseDto<Boolean> response = new ResponseDto<Boolean>();
        //이메일, 닉네임, 비밀번호, 이름, 생년월일, 휴대폰 번호, 성별
        //시도, 구군
        try {
            userService.signUp(user);
            response.setState("SUCCESS");
            response.setMessage("회원가입을 완료하였습니다.");
            return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
        }catch(Exception e){ //로그인 중 의문의 오류 발생.
            response.setState("FAIL");
            response.setMessage("회원가입 중 오류가 발생하였습니다.");
            return ExceptionHandler.exceptionResponse(response, e);
        }
    }


    //회원가입 부분
    @PostMapping(value = "/signUp")
    public ResponseEntity<?> signUp(@RequestBody UserDto user) {
        ResponseDto<Boolean> response = new ResponseDto<Boolean>();
        //이메일, 닉네임, 비밀번호, 이름, 생년월일, 휴대폰 번호, 성별
        //시도, 구군
        try {
            userService.signUp(user);
            response.setState("SUCCESS");
            response.setMessage("회원가입을 완료하였습니다.");
            return new ResponseEntity<ResponseDto<Boolean>>(response, HttpStatus.OK);
        }catch(Exception e){ //로그인 중 의문의 오류 발생.
            response.setState("FAIL");
            response.setMessage("회원가입 중 오류가 발생하였습니다.");
            return ExceptionHandler.exceptionResponse(response, e);
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
            return ExceptionHandler.exceptionResponse(response, e);
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
            return ExceptionHandler.exceptionResponse(response, e);
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
            return ExceptionHandler.exceptionResponse(response, e);
        }
    }
}

