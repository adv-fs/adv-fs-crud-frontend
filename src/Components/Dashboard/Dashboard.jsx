import { FormButton, 
  InputControl, 
  SelectControl } from '../FormControls/FormControls';
import { useForm } from '../../tests/useForm';
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

        <InputControl
          label="Quantity"
          type="number"
          required
          name="quantity"
          placeholder="How many do you need?"
          value={data.quantity}
          onChange={handleChange}
        />

        <SelectControl
          label="Aisle/Section"
          name="aisle"
          placeholder="Where can this item be found?"
          value={data.aisle || ''}
          onChange={handleChange}
        >
          <option value="produce">Produce</option>
          <option value="bakery">Bakery</option>
          <option value="frozen">Frozen</option>
        </SelectControl>

        <FormButton>
          Add Item
        </FormButton>
      </form>
    </div>
  );
}
