//package com.passion.ballulala.config;
//
//import com.passion.ballulala.service.UserService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
//import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//@Configuration
//@EnableWebSecurity
//@RequiredArgsConstructor
//public class AuthenticationConfig {
//
//    private final UserService userService;
//    @Value("${jwt.secret}")
//    private String secretKey;
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
//        return httpSecurity
//                // stateless한 rest api를 개발할 것이므로 csrf 공격에 대한 옵션은 꺼둔다.
//                .csrf(AbstractHttpConfigurer::disable)
//
//                // 특정 URL에 대한 권한 설정.
//                .authorizeHttpRequests((authorizeRequests) -> {
//                    authorizeRequests.requestMatchers("/users/login","/users/signUp").permitAll();
//                    authorizeRequests.requestMatchers("/**").authenticated();
////                    authorizeRequests.requestMatchers("/manager/**")
////                            // ROLE_은 붙이면 안 된다. hasAnyRole()을 사용할 때 자동으로 ROLE_이 붙기 때문이다.
////                            .hasAnyRole("ADMIN", "MANAGER");
////
////                    authorizeRequests.requestMatchers("/admin/**")
////                            // ROLE_은 붙이면 안 된다. hasRole()을 사용할 때 자동으로 ROLE_이 붙기 때문이다.
////                            .hasRole("ADMIN");
//                })
//
//                .formLogin((formLogin) -> {
//                    /* 권한이 필요한 요청은 해당 url로 리다이렉트 */
//                    formLogin.loginPage("/login");
//                })
//
//                .build();
//    }
//}
//
