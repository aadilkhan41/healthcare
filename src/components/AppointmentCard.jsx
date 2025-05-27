import styles from '../styles/appointmentcard.module.css';
import tooth from '../assets/tooth.png';
import biceps from '../assets/biceps.png';
import syringe from '../assets/syringe.png';
import eye from '../assets/eye.png';
import heart from '../assets/red-heart.png';
import doctor from '../assets/man-health-worker.png';

const iconMap = {
    tooth,
    biceps,
    syringe,
    eye,
    heart,
    doctor
};

function AppointmentCard({ appt, isActive = false }) {
    return (
        <section className={isActive ? `${styles.active} ${styles.cardsection}` : styles.cardsection}>
            <h5>
                {appt.title} <img src={iconMap[appt.icon]} alt={appt.icon} />
            </h5>
            <p>{appt.time}</p>
            {appt.doctor && <p>{appt.doctor}</p>}
        </section>
    );
}

export default AppointmentCard;