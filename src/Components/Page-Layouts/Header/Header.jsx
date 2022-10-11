import Navigation from '../Navigation/Navigation';
import SignOut from '../SignOut/SignOut';
import styles from './Header.css';


export default function Header() {
  return (
    <header className={styles.Header}>
      <Navigation />
      <SignOut />
    </header>
  );
}
