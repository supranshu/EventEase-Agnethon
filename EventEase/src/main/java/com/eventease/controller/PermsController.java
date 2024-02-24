package com.eventease.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventease.model.Events;
import com.eventease.repo.CollegeRepo;
import com.eventease.repo.CommitteeRepo;
import com.eventease.repo.EventsRepo;
import com.eventease.repo.StudentRepo;
import com.eventease.repo.UserRepo;
import com.eventease.service.HomeService;

import jakarta.transaction.Transactional;

@RestController
@CrossOrigin("*")
@RequestMapping("/eventease")
public class PermsController {
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
	
	@GetMapping("/accept/{role}/{evName}")
	@Transactional
	public ResponseEntity<String> accept(@PathVariable("role")String role, @PathVariable("evName")String evName) {
	    List<Events> ev = eventsRepo.findByEvName(evName);
	    
	    if (!ev.isEmpty() && ev.size() == 1) {
	        Events event = ev.get(0);
	        switch (role) {
	            case "Principal":
	                event.setAppPrin(true);
	                break;
	            case "Dean":
	                event.setAppDean(true);
	                break;
	            case "HOD":
	                event.setAppHod(true);
	                break;
	            case "Mentor":
	                event.setAppMentor(true);
	                break;
	            default:
	                return ResponseEntity.badRequest().body("Invalid role");
	        }
	        eventsRepo.save(event);
	        return ResponseEntity.ok().build(); // Return empty response for success
	    } else {
	        return ResponseEntity.notFound().build(); // Return 404 if event not found
	    }
	}
	
	@GetMapping("/reject/{role}/{evName}")
	@Transactional
	public ResponseEntity<String> reject(@PathVariable("role")String role, @PathVariable("evName")String evName) {
	    List<Events> ev = eventsRepo.findByEvName(evName);
	    
	    if (!ev.isEmpty() && ev.size() == 1) {
	        Events event = ev.get(0);
	        switch (role) {
	            case "Principal":
	                event.setAppPrin(false);
	                break;
	            case "Dean":
	                event.setAppDean(false);
	                break;
	            case "HOD":
	                event.setAppHod(false);
	                break;
	            case "Mentor":
	                event.setAppMentor(false);
	                break;
	            default:
	                return ResponseEntity.badRequest().body("Invalid role");
	        }
	        eventsRepo.save(event);
	        return ResponseEntity.ok().build(); // Return empty response for success
	    } else {
	        return ResponseEntity.notFound().build(); // Return 404 if event not found
	    }
	}
}
