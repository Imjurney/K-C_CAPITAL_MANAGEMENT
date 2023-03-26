import { Route, Routes } from 'react-router-dom';
// import ContactPage from '@/pages/Contact/ContactPage';
// import HomePage from '@/pages/Home/index';
// import AboutUs from '@/pages/AboutUs/AboutUsPage';
// import OtherServices from '@/pages/OtherServices/OtherServicesPage';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('@/pages/Home/index'));
const AboutUs = lazy(() => import('@/pages/AboutUs/AboutUsPage'));
const OtherServices = lazy(
  () => import('@/pages/OtherServices/OtherServicesPage')
);
const ContactPage = lazy(() => import('@/pages/Contact/ContactPage'));

function App() {
  return (
    <Routes>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about_us" element={<AboutUs />}></Route>
        <Route path="/investments" element={<ContactPage />}></Route>
        <Route path="/testimonials" element={<ContactPage />}></Route>
        <Route path="/other_services" element={<OtherServices />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Suspense>
    </Routes>
  );
}

export default App;
