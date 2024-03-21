package com.fitup.backend.controllers.TimeTable;

import java.util.UUID;

public class CreateTimeTableRequest {
    private UUID idTimeTable;
    private String classType;
    private String startTime;
    private String endTime;
    
    public void setIdTimeTable(UUID idTimeTable) {
        this.idTimeTable = idTimeTable;
    }
    public void setClassType(String classType) {
        this.classType = classType;
    }
    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }
    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }
    public UUID getIdTimeTable() {
        return idTimeTable;
    }
    public String getClassType() {
        return classType;
    }
    public String getStartTime() {
        return startTime;
    }
    public String getEndTime() {
        return endTime;
    }
}
