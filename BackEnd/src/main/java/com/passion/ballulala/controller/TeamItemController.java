package com.passion.ballulala.controller;

import com.passion.ballulala.dto.FreeBoardListDto;
import com.passion.ballulala.dto.FreeBoardReplyListDto;
import com.passion.ballulala.dto.TeamItemBuyDto;
import com.passion.ballulala.dto.TeamItemBuyListDto;
import com.passion.ballulala.service.TeamItemService;
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
@RequestMapping("/teamitem")
@RequiredArgsConstructor
public class TeamItemController {


    private final TeamItemService teamItemService;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody TeamItemBuyDto teamItemBuyDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            System.out.println(1);
            teamItemService.saveItem(teamItemBuyDto);
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

    @GetMapping("/list/{teamId}")
    public ResponseEntity<Map<String, Object>> list(@PathVariable(name = "teamId") Long teamId) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            List<TeamItemBuyListDto> teamItemBuyListDto = teamItemService.getTeamItemBuyList(teamId);
            resultMap.put("replyList", teamItemBuyListDto);
            resultMap.put("totalCnt", teamItemBuyListDto.size());
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
}
