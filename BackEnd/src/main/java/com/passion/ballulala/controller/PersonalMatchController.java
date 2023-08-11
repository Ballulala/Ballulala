package com.passion.ballulala.controller;

import com.passion.ballulala.dto.MatchAddDto;
import com.passion.ballulala.dto.PersonalMatchDto;
import com.passion.ballulala.repo.PersonalMatchRepo;
import com.passion.ballulala.service.PersonalMatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/personalMatch")
@RequiredArgsConstructor
public class PersonalMatchController {
    private final PersonalMatchService personalMatchService;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody PersonalMatchDto personalMatchDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            personalMatchService.savePersonalMatch(personalMatchDto);
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
