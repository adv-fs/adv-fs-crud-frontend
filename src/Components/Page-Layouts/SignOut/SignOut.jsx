import styles from './SignOut.css';
import { useAuth } from '../../../Context/UserContext';
import { Link } from 'react-router-dom';


export default function SignOut() {
  const { signOut } = useAuth();

  const handleSignout = async () => {
    await signOut();
  };

  return (
    <div className={styles.SignOut}>
      <Link to="auth"onClick={handleSignout}>
        Sign Out
      </Link>
    </div>
  );
}
