package com.passion.ballulala.controller;

import com.passion.ballulala.dto.ConsultBoardAnswerDto;
import com.passion.ballulala.dto.ConsultBoardAnswerListDto;
import com.passion.ballulala.dto.ConsultBoardListDto;
import com.passion.ballulala.dto.FreeBoardReplyDto;
import com.passion.ballulala.service.ConsultBoardAnswerService;
import com.passion.ballulala.service.FreeBoardReplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/consultboardanswer")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ConsultBoardAnswerController {
    private final ConsultBoardAnswerService consultBoardAnswerService;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody ConsultBoardAnswerDto consultBoardAnswerDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            System.out.println(1);
            consultBoardAnswerService.saveConsultBoardAnswer(consultBoardAnswerDto);
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
            List<ConsultBoardAnswerListDto> consultBoardAnswerList = consultBoardAnswerService.getConsultBoardAnswerList();
            resultMap.put("consultBoardAnswerList", consultBoardAnswerList);
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
}
