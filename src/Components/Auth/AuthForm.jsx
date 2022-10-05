import { FormButton, 
  InputControl,
} from '../FormControls/FormControls';
import styles from './Auth.css';
import { useForm } from '../FormControls/useForm';

export default function AuthForm({ onSubmit }) {
  const { handleChange, } = useForm();
    
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formDataObject);
  };

  return (
    <form className={styles.SearchForm} onSubmit={formSubmit}>
      <InputControl 
        type="email"
        label="Email/Username"
        name="email"
        required
        value={email}
        onChange={handleChange}
      />
      <InputControl
        label="Password"
        name="password"
        type="password"
        placeholder=""
        required
        value={password}
        onChange={handleChange}
      />
       
      <FormButton type="submit">Search</FormButton>
    </form>
  );
}
