package com.eventease.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventease.model.College;

@Repository
public interface CollegeRepo extends JpaRepository<College, Long> {

}
