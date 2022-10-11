import { createContext, 
  useContext,
  useEffect, 
  useState } from 'react';
import {
  getList,
  addItem
} from '../Services/list-services';

const ListContext = createContext();
export default function ListProvider({ children }) {
  const [list, setList] = useState(null);
  const [itemsById, setItemsById] = useState({});

  const displayList = async () => {
    const { data, error } = await getList();

    if (error) {
      console.log(error);
    }
    if (data) {
      setList(data);
      const map = data.reduce((map, list) => {
        map[list.id] = list;
        return map;
      }, {});
      setItemsById(map);
    }
  };

  useEffect(() => {
    displayList();
  }, []);

  const addNewItem = (item) => {
    setItemsById((itemsById) => ({
      ...itemsById,
      item,
    }));
  };

  const value = {
    list, setList,
    itemsById, setItemsById,
    addNewItem,
  };

  return (
    <ListContext.Provider value={value}>
      {children}
    </ListContext.Provider>
  );
}

export function useList() {
  const [error, setError] = useState(null);
  const { list, setList } = useContext(ListContext);

  const addNewItem = async (item) => {
    const { data, error } = await addItem(item);
    if (error) {
      setError(error.message);
    } else {
      setList((list) => [...list, data]);
      setError(null);
    }
  };

  return { list, error, addNewItem };
}
