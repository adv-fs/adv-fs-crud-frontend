import { FormButton, 
  InputControl } from '../FormControls/FormControls';
import { useForm } from '../FormControls/useForm';
import styles from './Dashboard.css';

export default function Dashboard() {
  const [data, handleChange] = useForm();

  return (
    <div className={styles.Dashboard}>
      <h2>
        Shopping List
      </h2>
      <form>
        <InputControl 
          label="Item"
          name="item"
          placeholder="Enter an item"
          required
          value={data.item || ''}
          onChange={handleChange}  
        />

        <FormButton>
          Add Item
        </FormButton>
      </form>

      <ul>
        
      </ul>
    </div>
  );
}
