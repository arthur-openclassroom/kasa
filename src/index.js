import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './sass/main.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Estate from './pages/Estate/Estate';
import Notfound from './pages/Notfound/Notfound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/estate/:id" element={<Estate />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)