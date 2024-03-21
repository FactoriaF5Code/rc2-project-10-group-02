package com.fitup.backend.models;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Site")
public class Site {
      @Id
      private UUID id_site;
      private String name;
      private String image_url;
      private String description;

      
      public UUID getId_site() {
            return id_site;
      }
      public void setId_site(UUID id_site) {
            this.id_site = id_site;
      }
      public String getName() {
            return name;
      }
      public void setName(String name) {
            this.name = name;
      }
      public String getImage_url() {
            return image_url;
      }
      public void setImage_url(String image_url) {
            this.image_url = image_url;
      }
      public String getDescription() {
            return description;
      }
      public void setDescription(String description) {
            this.description = description;
      } 
}


