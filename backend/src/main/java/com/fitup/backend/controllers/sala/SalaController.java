package com.fitup.backend.controllers.sala;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



import com.fitup.backend.models.Sala;
import com.fitup.backend.persistence.Sala.SalaRepository;

@RestController
public class SalaController {

    @Autowired
    private SalaRepository salaRepository;

    @PostMapping("/sala")
    public Sala createSchedule(@RequestBody CreateSalaRequest request) {
        Sala sala = new Sala();
        sala.setClassType(request.getClassType());
        sala.setStartTime(request.getStartTime());
        sala.setEndTime(request.getEndTime());
        
        return salaRepository.save(sala);
    }
}

    

