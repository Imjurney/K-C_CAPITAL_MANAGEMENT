import { Header } from './components/Header/Header';
import { TextInput } from './components/TextInput/TextInput';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ContactPage from './pages/Contact/ContactPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactPage />}></Route>
      <Route path="/about_us" element={<ContactPage />}></Route>
      <Route path="/investments" element={<ContactPage />}></Route>
      <Route path="/testimonials" element={<ContactPage />}></Route>
      <Route path="/other_services" element={<ContactPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  );
}

export default App;
