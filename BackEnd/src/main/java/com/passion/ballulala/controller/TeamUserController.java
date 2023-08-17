package com.passion.ballulala.controller;

import com.passion.ballulala.dto.TeamAddDto;
import com.passion.ballulala.dto.TeamListDto;
import com.passion.ballulala.dto.TeamUserDto;
import com.passion.ballulala.dto.TeamUserJoinListDto;
import com.passion.ballulala.service.TeamUserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/teamUser")
@RequiredArgsConstructor
public class TeamUserController {

    private final TeamUserService teamUserService;
    @PostMapping("/join")
    public ResponseEntity<Map<String, Object>> add(@RequestBody TeamUserDto teamUserDto, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            teamUserService.saveTeamUser(teamUserDto, request.getHeader("Authorization"));
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @GetMapping("/joinList")
    public ResponseEntity<Map<String, Object>> add(@RequestParam(required = false) Long team) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        System.out.println(team);
        try {
            List<TeamUserJoinListDto> teamList = teamUserService.teamUserJoinList(team).stream().map((m) -> {
                return TeamUserJoinListDto.fromEntity(m);
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

    @PostMapping("/joinAllow")
    public ResponseEntity<Map<String, Object>> add2(@RequestParam(required = false) Long id) {
        Map<String, Object> resultMap = new HashMap<>();
        System.out.println(id);
        HttpStatus status = null;
        try {
            teamUserService.teamUserAllow(id);
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @GetMapping("/memberOut/{teamId}")
    public ResponseEntity<Map<String, Object>> memberout(@PathVariable("teamId") Long teamId, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            teamUserService.memberOut(teamId, request.getHeader("Authorization"));
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @GetMapping("/joinDenied/{teamId}")
    public ResponseEntity<Map<String, Object>> joinDenied(@PathVariable("teamId") Long teamId, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            teamUserService.memberOut(teamId, request.getHeader("Authorization"));
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

}
