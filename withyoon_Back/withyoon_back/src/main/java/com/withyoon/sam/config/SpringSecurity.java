package com.withyoon.sam.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class SpringSecurity{
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

		return http.httpBasic().disable() // token을 사용하므로 basic 인증 disable (사용안함) // (HTTP 기본 인증 비활성화 대신 토큰 사용)
				.csrf().disable() // csrf는 현재 사용하지 않으므로 disable // CSRF(Cross-Site Requst Forgery) 비활성화
				.cors().and() // CORS 활성화 => 다른 도메인에서 자원 공유 허용
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.ALWAYS).and() // 세션을 생성하도록 구성
				.authorizeRequests()
				.antMatchers("/")
//				.authorizeRequests().antMatchers("/staff/staffInsert").hasRole("ADMIN")
//				.antMatchers("/staff/staffModify").hasRole("ADMIN")
//				.antMatchers("/spaceRentApp/**", "/parkapp/parkapplication", "/spaceRentApp/requestBattle").hasRole("USER")
//				.antMatchers("/", "/event/**", "/member/**", "/qna/**", "/staff/**", "/classes/**", "/notice/**",
//						"/space/**", "/SpaceRentAppRepository/**", "/banner/**", "/classApp/**", "/parkapp/**", "/search/**")
				.permitAll().and()
				// => "/", "/home", "/resources/**", "/uploadImage/**", "/member/**" 등의 경로는 인증
				// 안해도 됨.
//				.anyRequest().authenticated().and() // 나머지 모든 요청에 대해서 인증이 필요함을 명시
				// => 위 이외의 모든 경로는 인증해야됨.
				.build(); // 빌드
	} // filterChain
}
