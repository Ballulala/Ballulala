package com.passion.ballulala.controller;

import com.passion.ballulala.dto.*;
import com.passion.ballulala.jwt.JwtTokenProvider;
import com.passion.ballulala.service.FreeBoardService;
import com.passion.ballulala.service.HighlightService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/highlight")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class HightlightController {
    private final HighlightService highlightService;
    private final JwtTokenProvider jwtTokenProvider;
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody HighlightDto highlightDto, HttpServletRequest request) {
        String accessToken = request.getHeader("Authorization");
        Long userNo = jwtTokenProvider.decodeToken(accessToken);
        highlightDto.setUserId(userNo);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            System.out.println(1);
            highlightService.saveHighlight(highlightDto);
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
    public ResponseEntity<Map<String, Object>> list() {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            List<HighlightListDto> highlightList = highlightService.getHighlightList();
            resultMap.put("highlightList", highlightList);
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
//            logger.error("질문 검색 실패", e);
            System.out.println(e);
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @GetMapping("/detail/{highlightId}")
    public ResponseEntity<Map<String, Object>> detail(@PathVariable Long highlightId) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            HighlightDetailDto highlightDetailDto = highlightService.getHighlightDetail(highlightId);
            resultMap.put("highlightDetailDto", highlightDetailDto);
            resultMap.put("message", "success");
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @PutMapping("/modify/{highlightId}")
    public ResponseEntity<Map<String, Object>> update(@PathVariable Long highlightId, @RequestBody HighlightDto highlightDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            highlightService.updateHighlight(highlightId, highlightDto);
            resultMap.put("message", "success");
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @DeleteMapping("/delete/{highlightId}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long highlightId) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            highlightService.deleteHighlight(highlightId);
            resultMap.put("message", "success");
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
}
