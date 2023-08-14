package com.passion.ballulala.controller;

import com.passion.ballulala.dto.*;
import com.passion.ballulala.entity.Match;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.entity.TeamUser;
import com.passion.ballulala.service.MatchService;
import com.passion.ballulala.service.TeamItemService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/matches")
@RequiredArgsConstructor
public class MatchController {

    private final MatchService matchService;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody MatchAddDto matchAddDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            matchService.saveMatch(matchAddDto);
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
    @GetMapping("/teamList")
    public ResponseEntity<Map<String, Object>> add(HttpServletRequest request) {
        String accessToken = request.getHeader("Authorization");
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        System.out.println("1");
        try {
            System.out.println("111");
            List<TeamMatchListDto> teamList = matchService.getTeamById(accessToken);
            resultMap.put("matchList", teamList);
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
//            logger.error("질문 검색 실패", e);
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @GetMapping("/list")
//    public ResponseEntity<Map<String, Object>> add(@RequestParam(required = false) String matchDate, @RequestParam(required = false) Byte state) {
    public ResponseEntity<Map<String, Object>> add(@RequestParam(required = false) String matchDate) {
        System.out.println(matchDate);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        System.out.println("1");
//        LocalDateTime date = LocalDateTime.parse(matchDa1`te, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
//        System.out.println("date= "+date);
        try {
            String[] args = matchDate.split("-");
            LocalDateTime date = (LocalDateTime.of(Integer.parseInt(args[0]), Integer.parseInt(args[1]),Integer.parseInt(args[2]),0,0,0));
            List<MatchLoadDto> matchesByDate = matchService.getMatchesByDate(date).stream().map((m) -> {
                return MatchLoadDto.fromEntity(m);
            }).toList();


            resultMap.put("matchList", matchesByDate);
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
//            logger.error("질문 검색 실패", e);
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
}
