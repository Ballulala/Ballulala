package com.passion.ballulala.controller;

import com.passion.ballulala.dto.MatchLoadDto;
import com.passion.ballulala.dto.PlayListDto;
import com.passion.ballulala.entity.Play;
import com.passion.ballulala.service.PlayService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

}
