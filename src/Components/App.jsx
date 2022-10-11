import { BrowserRouter as Router, 
  Routes, 
  Route,  } from 'react-router-dom';
import Layout from './Page-Layouts/Layout';
import List from './Lists/List';
import Connect from './Connect/Connect';
import Hiking from './Lists/Hiking';
import Dashboard from './Dashboard/Dashboard';
import Auth from './Auth/Auth';
import AuthForm from './Auth/AuthForm';
import UserProvider from '../Context/UserContext.jsx';
import ProtectedRoute from './Auth/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="auth" element={<Auth />}>
            <Route index element={<AuthForm mode="signup" />}/>
            <Route path="signin" element={<AuthForm mode="signin" />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="list" element={<List />} >
                <Route path="hiking" element={<Hiking />} />
              </Route>
            </Route>
          
            
            <Route path="connect" element={<Connect />} />
          </Route>


        </Routes>
      </UserProvider>

    </Router>
  );
}
