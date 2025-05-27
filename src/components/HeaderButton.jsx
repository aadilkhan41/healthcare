import styles from '../styles/headerbuttons.module.css';
import NotificationIcon from '../assets/NotificationIcon'; 
import Profile from '../assets/avatar.png';
import PlusIcon from '../assets/PlusIcon';

function HeaderButton({label}){
    if(label === 'notification') return <button className={`${styles.headerbutton} ${styles.notification}`}><NotificationIcon /></button>;
    else if(label === 'profile') return <button className={`${styles.headerbutton} ${styles.profile}`}><img src={Profile} alt="Avatar" /></button>;
    else if(label === 'add') return <button className={`${styles.headerbutton} ${styles.add}`}><PlusIcon /></button>;
}

export default HeaderButton;