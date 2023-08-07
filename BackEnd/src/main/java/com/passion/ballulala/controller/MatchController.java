package com.passion.ballulala.controller;

import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.dto.MatchLoadDto;
import com.passion.ballulala.dto.TeamItemBuyDto;
import com.passion.ballulala.entity.Match;
import com.passion.ballulala.service.MatchService;
import com.passion.ballulala.service.TeamItemService;
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
@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> add(@RequestParam(required = false) String matchDate, @RequestParam(required = false) Byte state) {
        System.out.println(matchDate);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        System.out.println("1");
//        LocalDateTime date = LocalDateTime.parse(matchDate, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
//        System.out.println("date= "+date);
        try {
            System.out.println("111");
            String[] args = matchDate.split("-");
            LocalDateTime date = (LocalDateTime.of(Integer.parseInt(args[0]), Integer.parseInt(args[1]),Integer.parseInt(args[2]),0,0,0));
            List<Match> matchesByDate = matchService.getMatchesByDate(date, state);
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
