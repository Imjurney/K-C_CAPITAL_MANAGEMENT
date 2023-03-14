import ReactDOM from 'react-dom/client';
import App from './App';
import '@/index.css';
import { FormspreeProvider } from '@formspree/react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <FormspreeProvider project="2159903036745448628">
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </FormspreeProvider>
    </RecoilRoot>
  </BrowserRouter>
);
