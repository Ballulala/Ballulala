package com.passion.ballulala.controller;

import com.passion.ballulala.dto.*;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.service.MatchService;
import com.passion.ballulala.service.TeamService;
import com.passion.ballulala.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/teams")
@RequiredArgsConstructor
public class TeamController {

    private final TeamService teamService;
    private final UserService userService;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody TeamAddDto teamAddDto, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            teamService.saveTeam(teamAddDto, request.getHeader("Authorization"));
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> add() {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            List<TeamListDto> teamList = teamService.getTeamList().stream().map((m) -> {
                return TeamListDto.fromEntity(m);
            }).toList();
            resultMap.put("matchList", teamList);
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
    @GetMapping("/listMmr")
    public ResponseEntity<Map<String, Object>> add1() {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            List<TeamListDto> teamList = teamService.getTeamListMmr().stream().map((m) -> {
                return TeamListDto.fromEntity(m);
            }).toList();
            resultMap.put("matchList", teamList);
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @GetMapping("/carousel/{teamId}")
    public ResponseEntity<Map<String,Object>> carousel(@PathVariable (name = "teamId") Long teamId){
        Map<String ,Object> resultMap = new HashMap<>();
        HttpStatus status = null;

        try {
            List<TeamListDto> teamList = teamService.getCarousel(teamId).stream().map((m) -> {
                return TeamListDto.fromEntity(m);
            }).toList();
            resultMap.put("carousel", teamList);
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;

        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @GetMapping("/listGugun")
    public ResponseEntity<Map<String, Object>> add(@RequestParam(required = false) byte gugun) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            List<TeamListDto> teamList = teamService.getTeamByGugun(gugun).stream().map((m) -> {
                return TeamListDto.fromEntity(m);
            }).toList();
            resultMap.put("matchList", teamList);
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }


    //내가 가입한 팀 리스트 불러옴.
    @GetMapping(value = "/myTeam")
    public ResponseEntity<?> myTeam(HttpServletRequest request){
        String accessToken = request.getHeader("Authorization");
        Map<String, Object> map = new HashMap<>();
        try{
            List<TeamMatchListDto> teamList = teamService.getTeamById(accessToken);
            map.put("teamList", teamList);
            map.put("state", "SUCCESS");
            map.put("message", "내 팀 리스트 불러오기에 성공하였습니다.");
            return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
        }
        catch(Exception e){
            map.put("state", "FAIL");
            map.put("message", "내 팀 정보를 불러오는 중 오류가 발생하였습니다.");
            return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
        }
    }

    //팀 상세 페이지 보기, 이름으로 받아올거임
    //유저와 팀 관계를 찾아서
    @PostMapping(value = "/detail")
    public ResponseEntity<?> detail(@RequestBody TeamListDto teamListDto, HttpServletRequest request){

        String accessToken = request.getHeader("Authorization");
        //내가 가입한 팀 리스트가 나옴

        TeamListDto teamDetail = teamService.getTeamDetail(teamListDto.getId());

        Byte userState = userService.getUserState(accessToken, teamDetail.getId());

        Map<String, Object> map = new HashMap<>();
        try{
            map.put("teamDetail", teamDetail);

            if(userState==null){
                map.put("userState", "미가입자");
            }else{
                switch (userState){
                    case 1:
                        map.put("userState", "관리자");
                        break;
                    case 0:
                        map.put("userState", "일반회원");
                }
            }
            map.put("state", "SUCCESS");
            map.put("message", "해당 팀 정보 불러오기에 성공하였습니다.");
            return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
        }
        catch(Exception e){
            map.put("state", "FAIL");
            map.put("message", "해당 팀 정보 불러오기는 중 오류가 발생하였습니다.");
            return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
        }
    }


    //팀 관리자인 경우 팀 삭제
    @GetMapping("/delete/{teamId}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable("teamId") Long teamId, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            boolean flag = teamService.deleteTeam(teamId, request.getHeader("Authorization"));
            if(flag){
                resultMap.put("message", "success");
                status = HttpStatus.ACCEPTED;
            }else{
                resultMap.put("message", "fail");
                status = HttpStatus.ACCEPTED;
            }
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    //팀 관리자 페이지 보기

    //팀 상점 인벤토리 리스트 보기

}
