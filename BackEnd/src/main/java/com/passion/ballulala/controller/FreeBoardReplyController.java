package com.passion.ballulala.controller;

import com.passion.ballulala.dto.FreeBoardDto;
import com.passion.ballulala.dto.FreeBoardReplyDto;
import com.passion.ballulala.service.FreeBoardReplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/freeboardreply")
@RequiredArgsConstructor
public class FreeBoardReplyController {

    private final FreeBoardReplyService freeBoardReplyService;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody FreeBoardReplyDto freeBoardReplyDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            System.out.println(1);
            freeBoardReplyService.saveFreeBoardReply(freeBoardReplyDto);
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
