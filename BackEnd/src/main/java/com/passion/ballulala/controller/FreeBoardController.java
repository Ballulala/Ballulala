package com.passion.ballulala.controller;

import com.passion.ballulala.dto.FreeBoardDto;
import com.passion.ballulala.dto.FreeBoardListDto;
import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.entity.Match;
import com.passion.ballulala.service.FreeBoardService;
import com.passion.ballulala.service.MatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/freeboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FreeBoardController {

    private final FreeBoardService freeBoardService;
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody FreeBoardDto freeBoardDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            System.out.println(1);
            freeBoardService.saveFreeBoard(freeBoardDto);
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
            System.out.println("111");
            List<FreeBoardListDto> freeBoardList = freeBoardService.getFreeBoardList();
            resultMap.put("freeBoardList", freeBoardList);
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

    @GetMapping("/detail/{id}")
    public ResponseEntity<Map<String, Object>> detail(@PathVariable Long id) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            FreeBoardDto freeBoardDto = freeBoardService.getFreeBoardDetail(id);
            resultMap.put("freeBoard", freeBoardDto);
            resultMap.put("message", "success");
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @PutMapping("/modify/{id}")
    public ResponseEntity<Map<String, Object>> update(@PathVariable Long id, @RequestBody FreeBoardDto freeBoardDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            freeBoardService.updateFreeBoard(id, freeBoardDto);
            resultMap.put("message", "success");
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            freeBoardService.deleteFreeBoard(id);
            resultMap.put("message", "success");
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }


}
