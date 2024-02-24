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
            System.out.println(event);
            System.out.println(role);
            System.out.println(evName);
            
            switch (role) {
                case "Principal":
                    event.setAppPrin(true);
                    String responseMessage = "Accepted";
                    return ResponseEntity.ok(responseMessage);
                    
                case "Dean":
                    event.setAppDean(true);
                    String responseMessage2 = "Accepted";
                    return ResponseEntity.ok(responseMessage2);
                case "HOD":
                    event.setAppHod(true);
                    String responseMessage3 = "Accepted";
                    return ResponseEntity.ok(responseMessage3);
                case "Mentor":
                    event.setAppMentor(true);
                    String responseMessage4 = "Accepted";
                    return ResponseEntity.ok(responseMessage4);
                default:
                    System.out.println("Invalid ");
                    break;
            }
            System.out.println("Accepted");

            
            eventsRepo.save(event);
        } else {
        	System.out.println("Rejected");
            return ResponseEntity.ok("rejected");
        }
		System.out.println("Rejected");
        return ResponseEntity.ok("Rejected");
		
		 
	}
}
