import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import styles from './Auth.css';

export default function Auth() {
  const user = useUser();

  if (user) return <Navigate to="/"/>;
  return (
    <main className={styles.Auth}>
      <Outlet />

    </main>
  );
}
