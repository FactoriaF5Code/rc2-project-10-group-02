package com.fitup.backend.persistence;

import com.fitup.backend.models.Site;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SiteRepository extends JpaRepository<Site, UUID> {
    
}
