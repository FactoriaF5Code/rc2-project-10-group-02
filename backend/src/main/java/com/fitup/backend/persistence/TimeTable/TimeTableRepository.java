package com.fitup.backend.persistence.TimeTable;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fitup.backend.models.TimeTable;

@Repository
public interface TimeTableRepository extends JpaRepository<TimeTable, UUID>{
    
}
