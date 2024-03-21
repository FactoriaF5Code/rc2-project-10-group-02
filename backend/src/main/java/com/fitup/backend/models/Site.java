package com.fitup.backend.models;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Site")
public class Site {
      @Id
      private UUID id;

      private String name;
      private String imageUrl;
      private String description;

      // Constructor vacío requerido por JPA
      public Site() {
      }

      public Site(String name, String imageUrl, String description) {
            this.id = UUID.randomUUID();
            this.name = name;
            this.imageUrl = imageUrl;
            this.description = description;
      }

      public UUID getId() {
            return id;
      }

      public String getName() {
            return name;
      }

      public void setName(String name) {
            this.name = name;
      }

      public String getImageUrl() {
            return imageUrl;
      }

      public void setImageUrl(String imageUrl) {
            this.imageUrl = imageUrl;
      }

      public String getDescription() {
            return description;
      }

      public void setDescription(String description) {
            this.description = description;
      }
}
