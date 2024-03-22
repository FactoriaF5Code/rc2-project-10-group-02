package com.fitup.backend.controllers.sala;

import java.util.UUID;

public class SalaResponse {
    private UUID salaId;
    private String name;
    private String description;
    private String url;
 

    public SalaResponse(UUID salaId, String name, String description, String url) {
       
        this.salaId = salaId;
        this.name = name;
        this.description = description;
        this.url = url;
    }


    public UUID getSalaId() {
        return salaId;
    }


    public void setSalaId(UUID salaId) {
        this.salaId = salaId;
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
