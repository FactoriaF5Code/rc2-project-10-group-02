import "../Styles/TimeTable.css";
import HeaderGuest from "../components/HeaderGuest";

const TimeTable = () => {
    const schedule = {
        'Lunes': [
            { class: 'Tenis', time: '10:00-13:00' },
            { class: 'Pádel', time: '18:00-20:00' },
            { class: 'Spinning', time: '10:00-11:00' },
            { class: 'Zumba', time: '17:00-18:00' },
            { class: 'Natación', time: '09:00-10:00' },
        ],
        'Martes': [
            { class: 'Tenis', time: '18:00-20:00' },
            { class: 'Pádel', time: '12:00-14:00' },
            { class: 'Spinning', time: '10:00-11:00' },
            { class: 'Zumba', time: '11:00-12:00' },
            { class: 'Natación', time: '09:00-10:00' },
        ],
        'Miércoles': [
            { class: 'Tenis', time: '10:00-13:00' },
            { class: 'Pádel', time: '18:00-20:00' },
            { class: 'Spinning', time: '10:00-11:00' },
            { class: 'Zumba', time: '17:00-18:00' },
            { class: 'Natación', time: '09:00-10:00' },
        ],
        'Jueves': [
            { class: 'Tenis', time: '18:00-20:00' },
            { class: 'Pádel', time: '12:00-14:00' },
            { class: 'Spinning', time: '10:00-11:00' },
            { class: 'Zumba', time: '11:00-12:00' },
            { class: 'Natación', time: '09:00-10:00' },
        ],
        'Viernes': [
            { class: 'Pádel', time: '18:00-20:00' },
            { class: 'Spinning', time: '10:00-11:00' },
            { class: 'Zumba', time: '17:00-18:00' },
            { class: 'Natación', time: '09:00-10:00' },
        ],
        'Sábado': [
            { class: 'Spinning', time: '10:00-11:00' },
            { class: 'Zumba', time: '11:00-12:00' },
            { class: 'Natación', time: '09:00-10:00' },
        ]
    };

    const classes = ['Tenis', 'Pádel', 'Spinning', 'Zumba', 'Natación'];

    return (
        <>
        <HeaderGuest />
        <div className="container">
            <h1 className="encabezado-horario">Horario de nuestras instalaciones</h1>
            <p className="horario">Abierto todos los días de 09:00 a 23:00</p>
            <table>
                <thead>
                    <tr>
                        <th>Clase</th>
                        {Object.keys(schedule).map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {classes.map((classItem, i) => (
                        <tr key={classItem}>
                            <td>{classItem}</td>
                            {Object.values(schedule).map(day => (
                                <td key={`${classItem}-${i}`}>{day.find(item => item.class === classItem)?.time || '-'}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default TimeTable;