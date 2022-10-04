import { BrowserRouter as Router, 
  Routes, 
  Route,  } from 'react-router-dom';
import Layout from './Page-Layouts/Layout';
import List from './Lists/List';
import Connect from './Connect/Connect';
import Hiking from './Lists/Hiking';
import Dashboard from './Dashboard/Dashboard';
import Auth from './Auth/Auth';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="list" element={<List />} >
            <Route path="hiking" element={<Hiking />} />
          </Route>
          
          <Route path="auth" element={<Auth />} />
            
          <Route path="connect" element={<Connect />} />
        </Route>


      </Routes>
    </Router>
  );
}
