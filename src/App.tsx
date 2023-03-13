import { Header } from './components/Header/Header';
import { TextInput } from './components/TextInput/TextInput';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ContactPage from './pages/Contact/ContactPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
