package com.passion.ballulala.controller;

import com.passion.ballulala.dto.*;
import com.passion.ballulala.service.TeamItemService;
import com.passion.ballulala.service.UserItemService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

@RestController
@RequestMapping("/useritem")
@RequiredArgsConstructor
public class UserItemController {


    private final UserItemService userItemService;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody UserItemBuyDto userItemBuyDto, HttpServletRequest request) {
        String accessToken = request.getHeader("Authorization");
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            String message;
            message = userItemService.saveItem(userItemBuyDto, accessToken);
            resultMap.put("message", message);
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

//    @GetMapping("/list")
//    public ResponseEntity<Map<String, Object>> list() {
//        Map<String, Object> resultMap = new HashMap<>();
//        HttpStatus status = null;
//        try {
//            System.out.println("111");
//            List<TeamItemBuyListDto> teamItemBuyListDto = teamItemService.getTeamItemBuyList();
//            resultMap.put("TeamItemBuyListDto", teamItemBuyListDto);
//            resultMap.put("message", "success");
//            status = HttpStatus.ACCEPTED;
//        } catch (Exception e) {
////            logger.error("질문 검색 실패", e);
//            System.out.println(e);
//            resultMap.put("message", "fail: " + e.getClass().getSimpleName());
//            status = HttpStatus.INTERNAL_SERVER_ERROR;
//        }
//
//        return new ResponseEntity<Map<String, Object>>(resultMap, status);
//    }

    @GetMapping("/list")
    public ResponseEntity<Map<String, Object>> list(HttpServletRequest request) {
        String accessToken = request.getHeader("Authorization");
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            List<UserItemBuyListDto> userItemBuyListDto = userItemService.getUserItemBuyList(accessToken);
            resultMap.put("replyList", userItemBuyListDto);
            resultMap.put("totalCnt", userItemBuyListDto.size());
            resultMap.put("message", "success");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(resultMap, status);
    }
}
