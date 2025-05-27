import styles from '../styles/asidebar.module.css';
import logo from '../assets/logo.png';
import { navData } from '../data/navData';

function AsideBar() {
    const groupedItems = navData.reduce((acc, item) => {
        acc[item.section] = acc[item.section] || [];
        acc[item.section].push(item);
        return acc;
    }, {});

    return (
        <aside className={styles.asidebar}>
            <div>
                <section className={styles.section}>
                    <img src={logo} alt="Healthcare." />
                </section>
                {['General', 'Tools'].map((section) =>
                    groupedItems[section] ? (
                        <section key={section} className={styles.section}>
                            <h2>{section}</h2>
                            <ul>
                                {groupedItems[section].map(({ icon, label, active }) => (
                                    <li key={label} className={active ? styles.active : ''}>
                                        <span>{icon}</span>
                                        <p>{label}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : null
                )}
            </div>

            {groupedItems['Footer'] && (
                <div>
                    <ul>
                        {groupedItems['Footer'].map(({ icon, label }) => (
                            <li key={label}>
                                <span>{icon}</span>
                                <p>{label}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </aside>
    );
}

export default AsideBar;