import { NavLink } from 'react-router-dom';

import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="list">
        List
      </NavLink>
      <NavLink to="auth">
        Auth
      </NavLink>
      <NavLink to="connect">
        Connect
      </NavLink>
    </nav>
  );
}
