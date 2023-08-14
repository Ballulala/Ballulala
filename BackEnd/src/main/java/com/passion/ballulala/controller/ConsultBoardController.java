package com.passion.ballulala.controller;

import com.passion.ballulala.dto.ConsultBoardDto;
import com.passion.ballulala.dto.ConsultBoardListDto;
import com.passion.ballulala.dto.FreeBoardDto;
import com.passion.ballulala.dto.FreeBoardListDto;
import com.passion.ballulala.jwt.JwtTokenProvider;
import com.passion.ballulala.service.ConsultBoardService;
import com.passion.ballulala.service.FreeBoardService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/consultboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ConsultBoardController {

    private final ConsultBoardService consultBoardService;
    private final JwtTokenProvider jwtTokenProvider;
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody ConsultBoardDto consultBoardDto, HttpServletRequest request) {
        String accessToken = request.getHeader("Authorization");
        Long userNo = jwtTokenProvider.decodeToken(accessToken);
        consultBoardDto.setUserId(userNo);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            System.out.println(1);
            consultBoardService.saveConsultBoard(consultBoardDto);
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
            List<ConsultBoardListDto> consultBoardList = consultBoardService.getConsultBoardList();
            resultMap.put("consultBoardList", consultBoardList);
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
