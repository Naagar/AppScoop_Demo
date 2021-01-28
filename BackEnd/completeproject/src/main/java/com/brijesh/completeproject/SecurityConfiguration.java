package com.brijesh.completeproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Service;

import com.brijesh.completeproject.filter.JwtRequestFilter;

@Configuration
@Service
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
      
//	@Autowired(required=true)
//	DataSource dataSource;
	
	@Autowired
	UserDetailsService userDetailsService;
	
	@Autowired
	JwtRequestFilter jwtRequestFilter;
	
    @Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    	auth.userDetailsService(userDetailsService);
	}
    
    @Bean 
    public PasswordEncoder getPasswordEncoder() {
    	return NoOpPasswordEncoder.getInstance();
    }
    
    @Override
  	protected void configure(HttpSecurity http) throws Exception {
    	http.csrf().disable()
    	.authorizeRequests().antMatchers(HttpMethod.POST,"/login").permitAll().
    	anyRequest().authenticated().and().sessionManagement()
    	.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    	// Add a filter to validate the tokens with every request
    	http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }
    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception{
    	return super.authenticationManagerBean();
    }
    
}
