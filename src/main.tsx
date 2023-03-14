import ReactDOM from 'react-dom/client';
import App from './App';
import '@/index.css';
import { FormspreeProvider } from '@formspree/react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Header } from './components/Header/Header';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <FormspreeProvider project="2159903036745448628">
        <App />
      </FormspreeProvider>
    </RecoilRoot>
  </BrowserRouter>
);
