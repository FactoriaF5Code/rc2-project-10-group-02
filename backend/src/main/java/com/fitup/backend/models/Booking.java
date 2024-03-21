package com.fitup.backend.models;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Bookings")
public class Booking {
    @Id
    private UUID id;

    private UUID timetableId;
    private UUID userId;
    private UUID salaId;

    // Constructor vacío requerido por JPA
    public Booking() {
    }

    public Booking(UUID timetableId, UUID userId, UUID salaId) {
        this.id = UUID.randomUUID();
        this.timetableId = timetableId;
        this.userId = userId;
        this.salaId = salaId;
    }

    public UUID getId() {
        return id;
    }

    public UUID getTimetableId() {
        return timetableId;
    }

    public void setTimetableId(UUID timetableId) {
        this.timetableId = timetableId;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public UUID getSalaId() {
        return salaId;
    }

    public void setSalaId(UUID salaId) {
        this.salaId = salaId;
    }
}
