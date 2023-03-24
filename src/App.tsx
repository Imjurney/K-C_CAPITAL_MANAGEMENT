import { Route, Routes } from 'react-router-dom';
import ContactPage from '@/pages/Contact/ContactPage';
import HomePage from '@/pages/Home/index';
import AboutUs from '@/pages/AboutUs/AboutUsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about_us" element={<AboutUs />}></Route>
      <Route path="/investments" element={<ContactPage />}></Route>
      <Route path="/testimonials" element={<ContactPage />}></Route>
      <Route path="/other_services" element={<ContactPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  );
}

export default App;
