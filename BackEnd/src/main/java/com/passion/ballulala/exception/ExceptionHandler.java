package com.passion.ballulala.exception;

import com.passion.ballulala.dto.ResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ExceptionHandler {
    public static ResponseEntity<String> exceptionHandling(Exception e) {
        e.printStackTrace();
        return new ResponseEntity<String>("Error : " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public static <T> ResponseEntity<ResponseDto<T>> exceptionResponse(ResponseDto<T> response, Exception e) {
        e.printStackTrace();

        return new ResponseEntity<ResponseDto<T>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
