package com.passion.ballulala.controller;

import com.passion.ballulala.dto.FreeBoardDto;
import com.passion.ballulala.dto.FreeBoardListDto;
import com.passion.ballulala.dto.FreeBoardReplyDto;
import com.passion.ballulala.dto.FreeBoardReplyListDto;
import com.passion.ballulala.jwt.JwtTokenProvider;
import com.passion.ballulala.service.FreeBoardReplyService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/freeboardreply")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FreeBoardReplyController {

    private final FreeBoardReplyService freeBoardReplyService;
    private final JwtTokenProvider jwtTokenProvider;
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody FreeBoardReplyDto freeBoardReplyDto, HttpServletRequest request) {
        String accessToken = request.getHeader("Authorization");
        Long userNo = jwtTokenProvider.decodeToken(accessToken);
        freeBoardReplyDto.setUserId(userNo);
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

    @GetMapping("/list/{freeboardId}")
    public ResponseEntity<Map<String, Object>> list(@PathVariable(name = "freeboardId") Long freeBoardId) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            List<FreeBoardReplyListDto> freeBoardReplyList = freeBoardReplyService.getList(freeBoardId);
            resultMap.put("replyList", freeBoardReplyList);
            resultMap.put("totalCnt", freeBoardReplyList.size());
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
//            logger.error("질문 검색 실패", e);
            System.out.println(e);
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(resultMap, status);
    }

    @PutMapping("/modify/{id}")
    public ResponseEntity<Map<String, Object>> update(@PathVariable Long id, @RequestBody FreeBoardReplyDto freeBoardReplyDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            freeBoardReplyService.updateFreeBoardReply(id, freeBoardReplyDto);
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
            freeBoardReplyService.deleteFreeBoardReply(id);
            resultMap.put("message", "success");
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }



}
