package com.eventease.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventease.model.Committee;

@Repository
public interface CommitteeRepo extends JpaRepository<Committee, Long> {
	
	List<Committee> findByComName(String comName);
	List<Committee> findByClgName(String clgName);
	
}
