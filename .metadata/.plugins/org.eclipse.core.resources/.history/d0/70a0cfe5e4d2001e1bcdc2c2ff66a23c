package com.eventease.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventease.model.Committee;
import com.eventease.model.Events;
import com.eventease.model.User;
import com.eventease.repo.CollegeRepo;
import com.eventease.repo.CommitteeRepo;
import com.eventease.repo.EventsRepo;
import com.eventease.repo.StudentRepo;
import com.eventease.repo.UserRepo;

@Service
public class HomeService {

	@Autowired
	private CollegeRepo collegeRepo;
	@Autowired
	private CommitteeRepo committeeRepo;
	@Autowired
	private EventsRepo eventsRepo;
	@Autowired
	private StudentRepo studentRepo;
	@Autowired
	private UserRepo userRepo;
	
	//fetct committes by comm name
	public List<Committee> comByComName(String comName){
		
		return this.committeeRepo.findByComName(comName);
	}
	
	//fetch committees by clg name
	public List<Committee> comByClgName(String clgName){
		
		return this.committeeRepo.findByClgName(clgName);
	}
	
	//fetch Event by evennt name
	public List<Events> evByEvname(String evName){
		
		return this.eventsRepo.findByEvName(evName);
	}
	
	//fetch Event by Clg name
	public List<Events> evByClgname(String clgName){
		
		return this.eventsRepo.findByClgName(clgName);
	}
	
	//fetch Event by Clg name
	public List<Events> evByComname(String comName){
		
		return this.eventsRepo.findByComName(comName);
	}
	
	//fetch a users after logging in role
	public String login(User user) {
		
		Optional<User> optUser = Optional.of(userRepo.findByName(user.getName()));
		
		if(optUser.isPresent()) {
			User user1=optUser.get();
			if(user.getPassword().equals(user1.getPassword())){
				return user1.getRole();
			}else {
				return "false";
			}
		}
		else {
			return "false";
		}
	}
	
	
}
