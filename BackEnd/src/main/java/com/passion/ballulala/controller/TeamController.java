package com.passion.ballulala.controller;

import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.dto.MatchLoadDto;
import com.passion.ballulala.dto.TeamAddDto;
import com.passion.ballulala.dto.TeamListDto;
import com.passion.ballulala.entity.Team;
import com.passion.ballulala.service.MatchService;
import com.passion.ballulala.service.TeamService;
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

}
