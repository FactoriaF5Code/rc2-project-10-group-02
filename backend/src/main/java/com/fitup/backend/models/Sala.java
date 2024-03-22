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

    private UUID salaId;
    private String name;
    private String description;
    private String url;

    
    public Sala() {
    }

    public Sala(UUID salaId, String name, String description, String url) {
        this.id = UUID.randomUUID();
        this.salaId = salaId;
        this.name = name;
        this.description = description;
        this.url = url;
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

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
