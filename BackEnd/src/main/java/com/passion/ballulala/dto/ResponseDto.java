package com.passion.ballulala.dto;

public class ResponseDto<T> {

    private T data;
    private String message;
    private String State;

    public T getData() {
        return this.data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getState() {
        return this.State;
    }

    public void setState(String state) {
        State = state;
    }


}
