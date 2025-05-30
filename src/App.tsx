import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ProductPage from './pages/ProductPage';
import SubmitPage from './pages/SubmitPage';
import AdminPage from './pages/AdminPage';
import AboutIAPage from './pages/AboutIAPage';
import LegalPage from './pages/LegalPage';
import PartnersPage from './pages/PartnersPage';
import './i18n';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="min-h-screen flex flex-col bg-eco-gradient">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/fr\" replace />} />
              <Route path="/:lang">
                <Route index element={<HomePage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="submit" element={<SubmitPage />} />
                <Route path="admin" element={<AdminPage />} />
                <Route path="about-ia" element={<AboutIAPage />} />
                <Route path="legal" element={<LegalPage />} />
                <Route path="partners" element={<PartnersPage />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;