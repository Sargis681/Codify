import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// Lazy loading components
const HomePage = lazy(() => import('./components/HomPage/HomPage'));
const About = lazy(() => import('./components/About/About'));
const Services = lazy(() => import('./components/Services/Services'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const WrongPage = lazy(() => import('./components/WrongPage/WrongPage'));

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="App">
      <Header />
      {loading && <LoadingSpinner />}
      
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<WrongPage />} />
        </Routes>
      </Suspense>
      
      <Footer />
    </div>
  );
}

export default App;
