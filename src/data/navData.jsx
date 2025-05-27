import DashboardIcon from '../assets/DashboardIcon';
import HistoryIcon from '../assets/HistoryIcon';
import CalendarIcon from '../assets/CalendarIcon';
import AppointmentsIcon from '../assets/AppointmentsIcon';
import StatisticsIcon from '../assets/StatisticsIcon';
import Chat from '../assets/Chat';
import SupportIcon from '../assets/SupportIcon';
import SettingsIcon from '../assets/SettingsIcon';

export const navData = [
  { icon: <DashboardIcon />, label: 'Dashboard', section: 'General', active: true },
  { icon: <HistoryIcon />, label: 'History', section: 'General' },
  { icon: <CalendarIcon />, label: 'Calendar', section: 'General' },
  { icon: <AppointmentsIcon />, label: 'Appointments', section: 'General' },
  { icon: <StatisticsIcon />, label: 'Statistics', section: 'General' },

  { icon: <Chat />, label: 'Chat', section: 'Tools' },
  { icon: <SupportIcon />, label: 'Support', section: 'Tools' },

  { icon: <SettingsIcon />, label: 'Settings', section: 'Footer' }
];