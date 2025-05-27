import styles from '../styles/mobiletopnav.module.css';
import logo from '../assets/logo.png';
import HeaderButton from './HeaderButton';

function MobileTopNav(){
    return (
        <header className={styles.mobiletopnav}>
            <section>
                <span className={styles.logo}><img src={logo} alt="Healthcare." /></span>
            </section>
            <section>
                <span><HeaderButton label='notification' /></span>
                <span><HeaderButton label='profile' /></span>
            </section>
        </header>
    );
}

export default MobileTopNav;