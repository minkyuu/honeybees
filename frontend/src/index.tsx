import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from './constants/api';
import { RecoilRoot } from 'recoil';

const $root = document.getElementById('root') as HTMLElement;

const queryClient = new QueryClient();
const clientId = GOOGLE_CLIENT_ID;

ReactDOM.createRoot($root).render(
  // <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={clientId}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </RecoilRoot>
  // </React.StrictMode>
);
