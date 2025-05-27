import styles from '../styles/partlabel.module.css';
import Scan from '../assets/Scan';

function PartLabel({ title, imgSrc, label, reverse }) {
    return (
        <section className={`${styles.partlabel} ${styles[title]}`}>
            {!reverse && <span><Scan /></span>}
            <span className={styles.label}>
                <img src={imgSrc} alt={title} />
                <p>{label}</p>
            </span>
            {reverse && <span><Scan /></span>}
        </section>
    );
}

export default PartLabel;