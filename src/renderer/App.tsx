import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { Button, CssBaseline } from '@mui/material';
import { Navbar } from './components/navbar';
import { Home_fn } from './pages/home'; 
import { List_fn } from './pages/list';


export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <div>
        <Routes>
          <Route  path='/' element={<Home_fn />} />
          <Route  path='/List' element={<List_fn />} />

        </Routes>
      </div>
    </Router>
  );
}
