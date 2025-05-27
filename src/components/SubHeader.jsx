import styles from '../styles/subheader.module.css';
import ChevronDown from '../assets/ChevronDown';

function SubHeader() {
    return (
        <section className={styles.subhead}>
            <h1>Dashboard</h1>
            <div>
                <h6>This Week</h6>
                <button><ChevronDown /></button>
            </div>
        </section>
    );
}

export default SubHeader;