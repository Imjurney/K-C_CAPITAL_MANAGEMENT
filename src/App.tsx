import { Route, Routes } from 'react-router-dom';
// import ContactPage from '@/pages/Contact/ContactPage';
import HomePage from '@/pages/Home/index';
import AboutUs from '@/pages/AboutUs/AboutUsPage';
import OtherServices from '@/pages/OtherServices/OtherServicesPage';
import ContactPage from '@/pages/Contact/ContactPage';
import InvestmentsPage from '@/pages/Investments/InvestmentsPage';
import TestimonialPage from '@/pages/Testimonial/TestimonialPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about_us" element={<AboutUs />}></Route>
      <Route path="/investments" element={<InvestmentsPage />}></Route>
      <Route path="/testimonials" element={<TestimonialPage />}></Route>
      <Route path="/other_services" element={<OtherServices />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  );
}

export default App;
