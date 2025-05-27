import styles from '../styles/appointmentcal.module.css';
import RightArrowIcon from '../assets/RightArrowIcon';
import LeftArrowIcon from '../assets/LeftArrowIcon';
import appointmentCalendarData from '../data/appointmentCalendarData.json';
import DayList from './DayList';
import AppointmentCard from './AppointmentCard';

function AppointmentCal() {
    const currentDay = appointmentCalendarData.days.find((day) => day.current);
    const upcomingDays = appointmentCalendarData.days.filter(
        (day) => day.appointments && day.appointments.length > 0 && day !== currentDay
    );

    return (
        <div className={styles.calender}>
            <div className={styles.title}>
                <h4>{appointmentCalendarData.month}</h4>
                <div>
                    <button><LeftArrowIcon /></button>
                    <button><RightArrowIcon /></button>
                </div>
            </div>
            <div className={styles.weeks}>
                <DayList days={appointmentCalendarData.days} />
            </div>

            <div className={styles.appointmentCont}>
                {currentDay.appointments.map((appt, idx) => (
                    <AppointmentCard
                        key={idx}
                        appt={appt}
                        isActive={appt.time.includes(currentDay.current)}
                    />
                ))}
            </div>

            {upcomingDays.map((day) => (
                <div key={day.date}>
                    <h3>On {day.label}</h3>
                    <div className={styles.appointmentCont}>
                        {day.appointments.map((appt, idx) => (
                            <AppointmentCard key={idx} appt={appt} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AppointmentCal;