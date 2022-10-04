import { Outlet } from 'react-router-dom';
import styles from './Auth.css';

export default function Auth() {
  
  return (
    <main className={styles.Auth}>
      <Outlet />

    </main>
  );
}
