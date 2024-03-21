package com.fitup.backend.models;

import java.time.LocalTime;
import java.util.UUID;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "TimeTable")
public class TimeTable {
    @Id
    private UUID id_timetable;
    private LocalTime start_time;
    private LocalTime end_time;

    
    public UUID getId_timetable() {
        return id_timetable;
    }
    public void setId_timetable(UUID id_timetable) {
        this.id_timetable = id_timetable;
    }
    public LocalTime getStart_time() {
        return start_time;
    }
    public void setStart_time(LocalTime start_time) {
        this.start_time = start_time;
    }
    public LocalTime getEnd_time() {
        return end_time;
    }
    public void setEnd_time(LocalTime end_time) {
        this.end_time = end_time;
    }
}
