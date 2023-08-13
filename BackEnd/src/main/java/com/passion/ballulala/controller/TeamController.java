package com.passion.ballulala.controller;

import com.passion.ballulala.dto.*;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.User;
import com.passion.ballulala.service.MatchService;
import com.passion.ballulala.service.TeamService;
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
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody TeamAddDto teamAddDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
//        TeamAddDto t = new TeamAddDto(teamAddDto.getName(),teamAddDto.getSido(),teamAddDto.getGugun(),teamAddDto.getDescription());
        try {
            System.out.println(teamAddDto);
            teamService.saveTeam(teamAddDto);
            System.out.println(2);
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
//            logger.error("질문 생성 실패: {}", e.getMessage());
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            System.out.println(e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> add(@RequestParam(required = false) int page) {
        System.out.println(page);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        System.out.println("1");
        try {
            Page<Team> teamList = teamService.getTeamList(page);//.stream().map(TeamListDto::fromEntity).toList()
//            Page<TeamListDto> teamPage = teamService.getTeamList(page)
//                    .map(TeamListDto::fromEntity)
//                    .collect(Collectors.collectingAndThen(Collectors.toList(),
//                            content -> new PageImpl<>(content, PageRequest.of(page, 5), content.size())));

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
//    @GetMapping(value = "detail")
//    public ResponseEntity<?> detail(HttpServletRequest request){
//
//        String accessToken = request.getHeader("Authorization");
//        Map<String, Object> map = new HashMap<>();
//        try{
//            User user = userService.myInfo(accessToken);
//            UserDto userDto = UserDto.fromEntity(user);
//            List<TeamMatchListDto> teamList = teamService.getTeamById(accessToken);
//            map.put("user", userDto);
//            map.put("teamList", teamList);
//            map.put("state", "SUCCESS");
//            map.put("message", "유저 정보 불러오기에 성공하였습니다.");
//            return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
//        }
//        catch(Exception e){
//            map.put("state", "FAIL");
//            map.put("message", "유저 정보 불러오기는 중 오류가 발생하였습니다.");
//            return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
//        }
//    }


    //팀 관리자 페이지 보기

    //팀 상점 인벤토리 리스트 보기

}
