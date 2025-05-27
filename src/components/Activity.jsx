import styles from '../styles/activity.module.css';

function Activity() {
    return (
        <div className={styles.activity}>
            <div className={styles.header}>
                <h3>Activity</h3>
                <p>3 appointments on this week</p>
            </div>
            <div className={styles.barchart}>
                <section className={styles.bars}>
                    <div><span></span></div>
                    <div><span className={styles.sky}></span></div>
                    <div><span></span><span></span></div>
                    <div><span></span></div>
                    <div><span className={styles.sky}></span><span className={styles.blue}></span></div>
                    <div><span className={styles.blue}></span></div>
                    <div><span></span><span></span></div>
                    <div><span className={styles.sky}></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span className={styles.sky}></span><span className={styles.blue}></span></div>
                    <div><span className={styles.blue}></span></div>
                    <div><span></span><span></span></div>
                    <div><span className={styles.sky}></span></div>
                    <div><span className={styles.sky}></span><span className={styles.blue}></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span className={styles.blue}></span></div>
                    <div><span></span><span></span></div>
                    <div><span className={styles.blue}></span></div>
                    <div><span className={styles.sky}></span><span className={styles.blue}></span></div>
                    <div><span className={styles.sky}></span></div>
                    <div><span></span><span></span></div>
                    <div><span className={styles.blue}></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span className={styles.sky}></span><span className={styles.blue}></span></div>
                    <div><span className={styles.blue}></span></div>
                    <div><span></span><span></span></div>
                    <div><span className={styles.sky}></span></div>
                    <div><span></span><span></span></div>
                    <div><span className={styles.blue}></span></div>
                </section>
                <ul>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thurs</li>
                    <li>Fri</li>
                    <li>Sat</li>
                    <li>Sun</li>
                </ul>
            </div>
        </div>
    );
}

export default Activity;