import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Alerts from './Pages/Alerts';
import Navbar from './components/Home/Navbar';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import Application from './Pages/Application';
import Marketing from './Pages/Marketing';
import Badges from './Pages/Badges';

function App() {
  return (
    <>

    <Router>
          <Navbar/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alerts" element={<Alerts />} />
        <Route path="/Badges" element={<Badges />} />
        <Route path="/" element={<Alerts />} />
        <Route path="/application" element={<Application/>} />
        <Route path="/marketing" element={<Marketing/>} />
      </Routes>
          <Footer/>
    </Router>

    </>
  );
}

export default App;
