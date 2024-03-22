package com.fitup.backend.persistence.Sala;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fitup.backend.models.Sala;

@Repository
public interface SalaRepository extends JpaRepository<Sala, UUID> {

}