package com.passion.ballulala.controller;

import com.passion.ballulala.dto.*;
import com.passion.ballulala.entity.Play;
import com.passion.ballulala.service.PlayService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/play")
@RequiredArgsConstructor
public class PlayController {

    private final PlayService playService;

    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> add(@RequestParam(required = false) Long match) {
        System.out.println(match);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            List<PlayListDto> playListDto = playService.getPlauList(match).stream().map(PlayListDto::fromEntity).toList();
            resultMap.put("matchList", playListDto);
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
//            logger.error("질문 검색 실패", e);
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);

    }

    @PostMapping("/result")
    public ResponseEntity<Map<String, Object>> add(@RequestBody PlayResultDto playResultDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            playService.saveResult(playResultDto);
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
