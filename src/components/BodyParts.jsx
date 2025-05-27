import styles from '../styles/bodyparts.module.css';
import lungs from '../assets/lungs.png';
import teeth from '../assets/tooth.png';
import bone from '../assets/bone.png';
import ArrowRight from '../assets/ArrowRight';
import partsData from '../data/partsData.json';

const images = {
    lungs,
    teeth,
    bone,
};

function BodyParts() {
    return (
        <div className={styles.parts}>
            {partsData.map(({ title, label, date, value }) => (
                <section key={title} className={styles.part}>
                    <div>
                        <span><img src={images[title]} alt={label} /></span>
                        <h2>{label}</h2>
                    </div>
                    <p>Date: {date}</p>
                    <progress className={styles[title]} value={value} max="100"></progress>
                </section>
            ))}

            <section className={styles.detailscont}>
                <div className={styles.details}>
                    <h6>Details</h6>
                    <button><ArrowRight /></button>
                </div>
            </section>
        </div>
    );
}

export default BodyParts;