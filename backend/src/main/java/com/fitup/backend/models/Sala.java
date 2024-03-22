package com.fitup.backend.models;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Sala")
public class Sala {
    @Id
    private UUID id;

    private String classType;
    private UUID userId;
    private UUID salaId;
    private String startTime;
    private String endTime;

    // Constructor vacío requerido por JPA
    public Sala() {
    }

    public Sala(UUID userId, UUID salaId, String classType, String startTime, String endTime) {
        this.id = UUID.randomUUID();
        this.salaId = salaId;
        this.userId = userId;
        this.classType = classType;
        this.startTime = startTime;
        this.endTime = endTime;

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

    public UUID getId() {
        return id;
    }

    public UUID getSalaId() {
        return salaId;
    }

    public void setSalaId(UUID salaId) {
        this.salaId = salaId;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
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
