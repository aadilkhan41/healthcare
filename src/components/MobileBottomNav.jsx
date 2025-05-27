import styles from '../styles/mobilebottomnav.module.css';
import { navData } from '../data/navData';

function MobileBottomNav() {
    const mobileSections = ['General', 'Footer'];
    const mobileNavItems = navData.filter(item => mobileSections.includes(item.section));

    return (
        <nav className={styles.nav}>
            {mobileNavItems.map(({ icon, label, active }) => (
                <div key={label} className={active ? styles.active : ''}>
                    <i>{icon}</i>
                    <label>{label}</label>
                </div>
            ))}
        </nav>
    );
}

export default MobileBottomNav;