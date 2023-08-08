package com.passion.ballulala.interceptor;


import com.passion.ballulala.jwt.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class JwtInterceptor implements HandlerInterceptor {
    public static final Logger logger = LoggerFactory.getLogger(JwtInterceptor.class);
    private static final String HEADER_AUTH = "Access-Token";

    @Autowired
    private JwtService jwtService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }

        if (request.getRequestURI().equals("/users/**") && (request.getMethod().equals("GET")
                ||  request.getMethod().equals("POST")) ){
            return true;
        }

        if (request.getRequestURI().startsWith("/attraction") && request.getMethod().equals("GET")) {
            return true;
        }

        if (request.getRequestURI().startsWith("/like/attraction") && request.getMethod().equals("GET")) {
            return true;
        }

        if (request.getRequestURI().startsWith("/plan") && request.getMethod().equals("GET")) {
            return true;
        }

        if (request.getRequestURI().startsWith("/user/findPw") && request.getMethod().equals("POST")) {
            return true;
        }

        final String token = request.getHeader(HEADER_AUTH);

        if (token != null && jwtService.checkToken(token)) {
            logger.info("토큰 사용 가능 : {}", token);
            return true;
        } else {
            logger.info("토큰 사용 불가능 : {}", token);

            String str = "{\"state\": \"FAIL\", \"message\": \"토큰이 유효하지 않습니다.\"}";

            response.setContentType("application/json");
            response.setCharacterEncoding("utf-8");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().print(str);

            return false;
        }
    }

}
