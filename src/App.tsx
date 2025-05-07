import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';
import FeaturesPage from './pages/FeaturesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="features" element={<FeaturesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;