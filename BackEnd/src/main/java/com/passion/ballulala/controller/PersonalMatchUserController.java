package com.passion.ballulala.controller;

import com.passion.ballulala.dto.PersonalMatchDto;
import com.passion.ballulala.dto.PersonalMatchUserDto;
import com.passion.ballulala.repo.PersonalMatchUserRepo;
import com.passion.ballulala.service.PersonalMatchUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/personalMatchUser")
@RequiredArgsConstructor
public class PersonalMatchUserController {

    private final PersonalMatchUserService personalMatchUserService;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody PersonalMatchUserDto personalMatchUserDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            personalMatchUserService.savePersonalMatchUser(personalMatchUserDto);
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
