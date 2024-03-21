package com.fitup.backend.controllers.TimeTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



import com.fitup.backend.models.TimeTable;
import com.fitup.backend.persistence.TimeTable.TimeTableRepository;

@RestController
public class TimeTableController {

    @Autowired
    private TimeTableRepository timeTableRepository;

    @PostMapping("/timetable")
    public TimeTable createSchedule(@RequestBody CreateTimeTableRequest request) {
        TimeTable timeTable = new TimeTable();
        timeTable.setClassType(request.getClassType());
        timeTable.setStartTime(request.getStartTime());
        timeTable.setEndTime(request.getEndTime());
        
        return timeTableRepository.save(timeTable);
    }
}
