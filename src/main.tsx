import ReactDOM from 'react-dom/client';
import App from './App';
import '@/index.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ScrolltopTo from '@/components/ScrolltopTo/ScrolltopTo';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ScrolltopTo />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </HashRouter>
);
