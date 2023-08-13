package com.passion.ballulala.controller;

import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.dto.MatchLoadDto;
import com.passion.ballulala.dto.PersonalMatchDto;
import com.passion.ballulala.dto.PersonalMatchListDto;
import com.passion.ballulala.repo.PersonalMatchRepo;
import com.passion.ballulala.service.PersonalMatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/personalMatch")
@RequiredArgsConstructor
public class PersonalMatchController {
    private final PersonalMatchService personalMatchService;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody PersonalMatchDto personalMatchDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            personalMatchService.savePersonalMatch(personalMatchDto);
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
    @GetMapping("/load")
    public ResponseEntity<Map<String, Object>> add(@RequestParam(required = false) String matchDate) {
        System.out.println(matchDate);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        System.out.println("1");
//        LocalDateTime date = LocalDateTime.parse(matchDate, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
//        System.out.println("date= "+date);
        try {
            String[] args = matchDate.split("-");
            LocalDateTime date = (LocalDateTime.of(Integer.parseInt(args[0]), Integer.parseInt(args[1]),Integer.parseInt(args[2]),0,0,0));
            List<PersonalMatchListDto> matchesByDate = personalMatchService.personalMatchList(date).stream().map((m) -> {
                return PersonalMatchListDto.fromEntity(m);
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
