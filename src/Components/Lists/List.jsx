import { Link, Outlet } from 'react-router-dom';
import styles from './List.css';

export default function About() {
  return (
    <div className={styles.List}>
      <h2>
        About Page
      </h2>
      <nav className={styles.nav}>
        <Link to="">Hiking</Link>
     
      </nav>
      <Outlet />
    </div>
  );
}
