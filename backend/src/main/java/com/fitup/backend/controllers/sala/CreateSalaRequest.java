package com.fitup.backend.controllers.sala;

import java.util.UUID;

public class CreateSalaRequest {

    private UUID idSala;
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    private String url;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setIdSala(UUID idSala) {
        this.idSala = idSala;
    }

    public UUID getIdSala() {
        return idSala;
    }

}
