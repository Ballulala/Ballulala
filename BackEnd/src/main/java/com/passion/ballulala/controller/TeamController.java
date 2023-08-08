package com.passion.ballulala.controller;

import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.dto.TeamAddDto;
import com.passion.ballulala.service.MatchService;
import com.passion.ballulala.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
@RestController
@RequestMapping("/teams")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
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
}
