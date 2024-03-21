package com.fitup.backend.models;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="Bookings")
public class Booking {
      @Id
      private UUID id_booking;
      private UUID id_timetable;
      private UUID id_user;
      private UUID id_sala;

      
    public UUID getId_booking() {
        return id_booking;
    }
    public void setId_booking(UUID id_booking) {
        this.id_booking = id_booking;
    }
    public UUID getId_timetable() {
        return id_timetable;
    }
    public void setId_timetable(UUID id_timetable) {
        this.id_timetable = id_timetable;
    }
    public UUID getId_user() {
        return id_user;
    }
    public void setId_user(UUID id_user) {
        this.id_user = id_user;
    }
    public UUID getId_sala() {
        return id_sala;
    }
    public void setId_sala(UUID id_sala) {
        this.id_sala = id_sala;
    }
}


