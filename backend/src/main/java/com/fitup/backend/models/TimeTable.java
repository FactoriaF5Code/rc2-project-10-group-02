package com.fitup.backend.models;

import java.time.LocalTime;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "TimeTable")
public class TimeTable {
    @Id
    private UUID id;

    private LocalTime startTime;
    private LocalTime endTime;

    public TimeTable() {
    }

    public TimeTable(LocalTime startTime, LocalTime endTime) {
        this.id = UUID.randomUUID();
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public UUID getId() {
        return id;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }
}
