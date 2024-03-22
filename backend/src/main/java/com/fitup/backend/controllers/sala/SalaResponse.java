package com.fitup.backend.controllers.sala;

import java.util.UUID;

public class SalaResponse {
    private UUID idSala;
    private String classType;
    private String startTime;
    private String endTime;

    public void setIdTimeTable(UUID idSala) {
        this.idSala = idSala;
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

    public SalaResponse(UUID idSala, String classType, String startTime, String endTime) {
        this.idSala = idSala;
        this.classType = classType;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public UUID getIdSala() {
        return idSala;
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
