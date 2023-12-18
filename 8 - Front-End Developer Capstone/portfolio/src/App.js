import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Construction from './pages/Construction';
import Submitted from './pages/Submitted';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <Construction /> } />
        <Route path="/menu" element={ <Construction /> } />
        <Route path="/reservations" element={ <Bookings /> } />
        <Route path="/order" element={ <Construction /> } />
        <Route path="/login" element={ <Construction /> } />
        <Route path="/submitted" element={ <Submitted /> } /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
