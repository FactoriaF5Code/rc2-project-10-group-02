import { useState } from 'react';
import HeaderGuest from "../components/HeaderGuest";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/Reserves.css"
import { Link } from 'react-router-dom';

export const Reserves = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <HeaderGuest />
            <main>
                <form>
                    <h2>¿Qué quieres reservar?</h2>
                    <label className="chooseSala">
                        <select className="chooseSalaButton" value={selectedOption} onChange={handleOptionChange}>
                            <option value="">Escoge sala</option>
                            <option value="opcion1">Opción 1</option>
                            <option value="opcion2">Opción 2</option>
                            <option value="opcion3">Opción 3</option>
                        </select>
                    </label>
                    <h2>Selecciona fecha y hora</h2>
                    <label className="datePicker">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            showTimeSelect
                            timeIntervals={15}
                            dateFormat="dd-MM-yyyy HH:mm"
                            className="customDatePicker" // Clase CSS personalizada para el DatePicker
                            wrapperClassName="customDatePickerWrapper" // Clase CSS personalizada para el contenedor del DatePicker
                            calendarClassName="customCalendar" // Clase CSS personalizada para el calendario
                            popperClassName="customPopper" // Clase CSS personalizada para el popper del calendario
                        />
                    </label>
                </form>
                <button><Link to="/Reservar" className="reservar">reservar</Link> </button>
            </main>
        </>
    );
};
