package com.eventease.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.eventease.model.Committee;
import com.eventease.model.Events;
import com.eventease.model.User;
import com.eventease.repo.CollegeRepo;
import com.eventease.repo.CommitteeRepo;
import com.eventease.repo.EventsRepo;
import com.eventease.repo.StudentRepo;
import com.eventease.repo.UserRepo;
import com.eventease.service.HomeService;

import io.micrometer.observation.Observation.Event;
import jakarta.persistence.criteria.Path;

@RestController
public class HomeController {
	
	@Autowired
	private HomeService service;
	
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

	@GetMapping("/com-by-com-name/{comName}")
	public List<Committee> getComByComName(@PathVariable("comName")String comName){
		return this.service.comByComName(comName);
	}
	
	@GetMapping("/com-by-clg-name/{clgName}")
	public List<Committee> getComByClgName(@PathVariable("clgName")String clgName){
		return this.service.comByClgName(clgName);
	}
	@GetMapping("/ev-by-ev-name/{evName}")
	public List<Events> getEvByEvName(@PathVariable("evName")String evName){
		return this.service.evByEvname(evName);
	}
	@GetMapping("/ev-by-clg-name/{clgName}")
	public List<Events> getEvByClgName(@PathVariable("clgName")String clgName){
		return this.service.evByClgname(clgName);
	}
	@GetMapping("/ev-by-com-name/{comName}")
	public List<Events> getEvByComName(@PathVariable("comName")String comName){
		return this.service.evByComname(comName);
	}
	@PostMapping("/login")
	public String putLogin(@RequestBody User user){
		return this.service.login(user);
	}
	
	@PostMapping("/sign-up")
	public User signUp(@RequestBody User user) {
		
		user.setRole("Student");
		return this.userRepo.save(user);
	}
	
	@PostMapping("upload-event/{comName}/{clgName}")
	public Events upEvent(@RequestBody Events event,@PathVariable("comName")String comName,@PathVariable("clgName")String clgName) {
		event.setComName(comName);
		event.setClgName(clgName);
		
		return this.eventsRepo.save(event);
	}
	
	@PostMapping("upload-committee/{clgName}")
	public Committee upCommittee(@RequestBody Committee com,@PathVariable("clgName")String clgName) {
		
		com.setClgName(clgName);
		return this.committeeRepo.save(com);
	}
	
}
