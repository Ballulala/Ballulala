package com.passion.ballulala.controller;

import com.passion.ballulala.dto.StadiumDto;
import com.passion.ballulala.service.StadiumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/stadium")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StadiumController {

    private final StadiumService stadiumService;

    @GetMapping("/list")
    public ResponseEntity<Map<String,Object>> stadiumList(){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            List<StadiumDto> list = stadiumService.stadiumList();
            resultMap.put("stadiumList",list);
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
