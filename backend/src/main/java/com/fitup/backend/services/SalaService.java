package com.fitup.backend.services;


import org.springframework.stereotype.Service;

import com.fitup.backend.models.Sala;
import com.fitup.backend.persistence.Sala.SalaRepository;
import java.util.List;

@Service
public class SalaService {
    private final SalaRepository salaRepository;

    
    public SalaService(SalaRepository salaRepository) {
        this.salaRepository = salaRepository;
    }

    public List<Sala> obtenerSala() {
        return salaRepository.findAll();

    }

}
