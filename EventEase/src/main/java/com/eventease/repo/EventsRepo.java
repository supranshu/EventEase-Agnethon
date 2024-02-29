package com.eventease.repo;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventease.model.Events;

import io.micrometer.observation.Observation.Event;

@Repository
public interface EventsRepo extends JpaRepository<Events, Long> {

	List<Events> findByEvName(String evName);
	List<Events> findByClgName(String clgName);
	List<Events> findByComName(String comName);
	 List<Events> findByAppPrinAndAppDeanAndAppHodAndAppMentor(boolean appPrin, boolean appDean, boolean appHod, boolean appMentor);
	Events findByDateAndVenue(Date date, String venue);
}
