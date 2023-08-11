package com.passion.ballulala.controller;

import com.passion.ballulala.dto.FreeBoardDto;
import com.passion.ballulala.dto.MercenaryDto;
import com.passion.ballulala.dto.MercenaryListDto;
import com.passion.ballulala.service.MercenaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/mercenary")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MercenaryController {
    private  final MercenaryService mercenaryService;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody MercenaryDto mercenaryDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            System.out.println(1);
            mercenaryService.saveMercenary(mercenaryDto);
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
            List<MercenaryListDto> mercenaryList = mercenaryService.getMercenaryList();
            resultMap.put("mercenaryList", mercenaryList);
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

    @GetMapping("/detail/{mercenaryId}")
    public ResponseEntity<Map<String, Object>> detail(@PathVariable Long mercenaryId) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            MercenaryDto mercenaryDto = mercenaryService.getMercenaryDetail(mercenaryId);
            resultMap.put("mercenary", mercenaryDto);
            resultMap.put("message", "success");
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @PutMapping("/modify/{mercenaryId}")
    public ResponseEntity<Map<String, Object>> update(@PathVariable Long mercenaryId, @RequestBody MercenaryDto mercenaryDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            mercenaryService.updateMercenary(mercenaryId, mercenaryDto);
            resultMap.put("message", "success");
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @DeleteMapping("/delete/{mercenaryId}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long mercenaryId) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            mercenaryService.deleteMercenary(mercenaryId);
            resultMap.put("message", "success");
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("message", "fail: " + e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
}
