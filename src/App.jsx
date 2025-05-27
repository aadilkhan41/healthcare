import styles from './app.module.css'
import AsideBar from './components/AsideBar';
import HeaderButton from './components/HeaderButton';
import SubHeader from './components/SubHeader';
import HumanBody from './components/HumanBody';
import BodyParts from './components/BodyParts';
import Activity from './components/Activity';
import AppointmentCal from './components/AppointmentCal';
import MobileTopNav from './components/MobileTopNav';
import MobileBottomNav from './components/MobileBottomNav';

function App() {
    return (
        <>
            <AsideBar />
            <main>
                <MobileTopNav/>
                <div className={styles.dashboard}>
                    <header>
                        <input type="text" placeholder='Search' />
                        <span><HeaderButton label='notification' /></span>
                    </header>
                    <SubHeader />
                    <div className={styles.bodyantonomy}>
                        <HumanBody />
                        <BodyParts />
                    </div>
                    <Activity />
                </div>
                <div className={styles.appointments}>
                    <header>
                        <HeaderButton label='profile' />
                        <HeaderButton label='add' />
                    </header>
                    <AppointmentCal />
                </div>
                <MobileBottomNav/>
            </main>
        </>
    );
};

export default App;