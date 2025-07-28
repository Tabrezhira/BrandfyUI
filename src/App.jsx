import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Alerts from './Pages/Alerts';
import Navbar from './components/Home/Navbar';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
