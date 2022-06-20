import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Profile = lazy(() => import('./Profile'));
const Former = lazy(() => import('./Former'));
const Merch = lazy(() => import('./Merch'));
const Gallery = lazy(() => import('./Gallery'));
const Reports = lazy(() => import('./Reports'));
const Signing = lazy(() => import('./Signing'));
const API1 = lazy(() => import('./API1'));
const API2 = lazy(() => import('./API2'));


const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Former" element={<Former />} />
        <Route path="/Merch" element={<Merch />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Signing" element={<Signing />} />
        <Route path="/API1" element={<API1 />} />
        <Route path="/API2" element={<API2 />} />

      </Routes>
    </Suspense>
  </Router>
);

export default App;