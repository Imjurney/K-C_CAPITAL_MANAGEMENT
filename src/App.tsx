import { Route, Routes } from 'react-router-dom';
// import ContactPage from '@/pages/Contact/ContactPage';
import HomePage from '@/pages/Home/index';
import AboutUs from '@/pages/AboutUs/AboutUsPage';
import OtherServices from '@/pages/OtherServices/OtherServicesPage';
import ContactPage from '@/pages/Contact/ContactPage';
import { Suspense, lazy } from 'react';
import InvestmentsPage from '@/pages/Investments/InvestmentsPage';
//
// const HomePage = lazy(() => import('@/pages/Home/index'));
// const AboutUs = lazy(() => import('@/pages/AboutUs/AboutUsPage'));
// const OtherServices = lazy(
//   () => import('@/pages/OtherServices/OtherServicesPage')
// );
// const ContactPage = lazy(() => import('@/pages/Contact/ContactPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about_us" element={<AboutUs />}></Route>
      <Route path="/investments" element={<InvestmentsPage />}></Route>
      <Route path="/testimonials" element={<ContactPage />}></Route>
      <Route path="/other_services" element={<OtherServices />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  );
}

export default App;
