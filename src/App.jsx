import { Routes, Route } from 'react-router-dom';

import './App.css'
import Layout from './layout/Layout';
import GeoViewMap from './GeoViewMap';
import LandingPage from './pages/landingPage/LandingPage';
import ContactUs from './pages/contactUs/ContactUs';
import NoPage from './pages/NoPage';

// function App() {
//   return (
//     <div className="App">
//       <GeoViewMap />
//     </div>
//   );
// }

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Render LandingPage component for both index and "/home" routes */}
        <Route index element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App
