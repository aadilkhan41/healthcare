import styles from '../styles/humanbody.module.css';
import humanbody from '../assets/human-muscle-anatomy.png';
import Zoom from '../assets/Zoom';
import heart from '../assets/red-heart.png';
import leg from '../assets/leg.png';
import PartLabel from './PartLabel';
import partsData from '../data/humanbodyData.json';

const images = {
    heart: heart,
    leg: leg,
};

function HumanBody() {
    return (
        <div className={styles.humanbody}>
            <div>
                <button className={styles.zoom}><Zoom /></button>
                <section className={styles.humanbodycont}>
                    <img src={humanbody} alt="Human Muscle Anatomy" />
                </section>
            </div>
            {partsData.map(({ title, label, reverse }) => (
                <PartLabel
                    key={title}
                    title={title}
                    imgSrc={images[title]}
                    label={label}
                    reverse={reverse}
                />
            ))}
        </div>
    );
}

export default HumanBody;