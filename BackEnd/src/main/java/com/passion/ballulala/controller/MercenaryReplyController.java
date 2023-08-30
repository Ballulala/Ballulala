package com.passion.ballulala.controller;


import com.passion.ballulala.dto.FreeBoardReplyDto;
import com.passion.ballulala.dto.FreeBoardReplyListDto;
import com.passion.ballulala.dto.MercenaryReplyDto;
import com.passion.ballulala.dto.MercenaryReplyListDto;
import com.passion.ballulala.entity.Mercenary;
import com.passion.ballulala.jwt.JwtTokenProvider;
import com.passion.ballulala.service.MercenaryReplyService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/mercenaryreply")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MercenaryReplyController {

    private final MercenaryReplyService mercenaryReplyService;
    private final JwtTokenProvider jwtTokenProvider;
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody MercenaryReplyDto mercenaryReplyDto, HttpServletRequest request) {
        String accessToken = request.getHeader("Authorization");
        Long userNo = jwtTokenProvider.decodeToken(accessToken);
        mercenaryReplyDto.setUserId(userNo);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            mercenaryReplyService.saveMercenaryReply(mercenaryReplyDto);
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

    @GetMapping("/list/{mercenaryId}")
    public ResponseEntity<Map<String, Object>> list(@PathVariable(name = "mercenaryId") Long mercenaryId, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        Long userNo = jwtTokenProvider.decodeToken(request.getHeader("Authorization"));
        try {
            List<MercenaryReplyListDto> mercenaryReplyList = mercenaryReplyService.getList(mercenaryId);
            resultMap.put("userId" , userNo);
            resultMap.put("replyList", mercenaryReplyList);
            resultMap.put("totalCnt", mercenaryReplyList.size());
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
    public ResponseEntity<Map<String, Object>> update(@PathVariable Long id, @RequestBody MercenaryReplyDto mercenaryReplyDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            mercenaryReplyService.updateMercenaryReply(id, mercenaryReplyDto);
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
            mercenaryReplyService.deleteMercenaryReply(id);
            resultMap.put("message", "success");
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

}
