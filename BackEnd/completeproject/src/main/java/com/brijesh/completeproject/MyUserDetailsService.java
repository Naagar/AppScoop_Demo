package com.brijesh.completeproject;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.brijesh.completeproject.models.MyUserDetails;
import com.brijesh.completeproject.models.User;
import com.brijesh.completeproject.repository.UserRepository;
@Service
public class MyUserDetailsService implements UserDetailsService {
	
	@Autowired 
	UserRepository userRepository;
	
  @Override
  public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException{
	
	Optional<User> user=userRepository.findByUserName(userName);
	 
	user.orElseThrow(()->new UsernameNotFoundException("User name "+userName+"not found"));
	
	return user.map(MyUserDetails::new).get(); 
  }
	
}
