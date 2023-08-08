package com.passion.ballulala.jwt;

import java.io.UnsupportedEncodingException;
import java.security.Key;
import java.util.Date;
import java.util.Map;

import com.passion.ballulala.exception.UnAuthorizedException;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtService{

    public static final Logger logger = LoggerFactory.getLogger(JwtService.class);

    // SALT는 토큰 유효성 확인 시 사용하기 때문에 외부에 노출되지 않게 주의해야 한다.
    private static final String SALT = "Secret";

    private Key secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);

    private static final int ACCESS_TOKEN_EXPIRE_MINUTES = 100; // 분단위
    private static final int REFRESH_TOKEN_EXPIRE_MINUTES = 2; // 주단위

    public <T> String createAccessToken(String key, T data) {
        return create(key, data, "access-token", 1000 * 60 * ACCESS_TOKEN_EXPIRE_MINUTES);
    }

    // AccessToken에 비해 유효기간을 길게...
    public <T> String createRefreshToken(String key, T data) {
        return create(key, data, "refresh-token", 1000 * 60 * 60 * 24 * 7 * REFRESH_TOKEN_EXPIRE_MINUTES);
    }

    // Token 발급
    /**
     * key : Claim에 셋팅될 key 값
     * data : Claim에 셋팅 될 data 값
     * subject : payload에 sub의 value로 들어갈 subject값
     * expire : 토큰 유효기간 설정을 위한 값
     * jwt 토큰의 구성 : header + payload + signature
     */
    public <T> String create(String key, T data, String subject, long expire) {
        // Payload 설정 : 생성일 (IssuedAt), 유효기간 (Expiration),
        // 토큰 제목 (Subject), 데이터 (Claim) 등 정보 세팅.

        Claims claims = Jwts.claims()
                .setSubject(subject)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expire));

        // 저장할 data의 key, value
        claims.put(key, data);


        String jwt = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setClaims(claims)
                .signWith(secretKey)
                .compact(); // 직렬화 처리.

        return jwt;
    }

    // Signature 설정에 들어갈 key 생성.
    private byte[] generateKey() {
        byte[] key = null;
        try {
            key = SALT.getBytes("UTF-8");
        } catch (UnsupportedEncodingException e) {
            if (logger.isInfoEnabled()) {
                e.printStackTrace();
            } else {
                logger.error("Making JWT Key Error ::: {}", e.getMessage());
            }
        }

        return key;
    }

    // 전달 받은 토큰이 제대로 생성된것인지 확인 하고 문제가 있다면 UnauthorizedException을 발생.
    public boolean checkToken(String jwt) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(this.generateKey()).parseClaimsJws(jwt);
            logger.debug("claims: {}", claims);
            return true;
        } catch (Exception e) {
            logger.error(e.getMessage());
            return false;
        }
    }

    public Map<String, Object> get(String key) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                .getRequest();
        String jwt = request.getHeader("access-token");
        Jws<Claims> claims = null;
        try {
            claims = Jwts.parser().setSigningKey(SALT.getBytes("UTF-8")).parseClaimsJws(jwt);
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new UnAuthorizedException();
        }
        Map<String, Object> value = claims.getBody();
        logger.info("value : {}", value);
        return value;
    }

    public int getData(String token, String key) {
        return (int) Jwts.parser().setSigningKey(this.generateKey()).parseClaimsJws(token).getBody().get(key);
    }
}
