import styles from '../styles/daylist.module.css';
import Dot from '../assets/Dot';

function DayList({ days }) {
    return (
        <>
            {days.map((day) => (
                <ul key={day.date} className={day.current ? `${styles.today} ${styles.ul}` : styles.ul}>
                    <li>
                        <div>
                            <p>{day.label}</p>
                            <h2>{new Date(day.date).getDate()}</h2>
                        </div>
                    </li>
                    {day.times.map((time, i) => (
                        <li key={i}>
                            <div
                                className={
                                    time === day.current
                                        ? styles.current
                                        : day.later?.includes(time)
                                            ? styles.later
                                            : ''
                                }
                            >
                                <p>{time}</p>
                                {day.later?.includes(time) && <Dot />}
                            </div>
                        </li>
                    ))}
                </ul>
            ))}
        </>
    );
}

export default DayList;