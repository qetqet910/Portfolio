import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './style/GlobalStyle';
import { RecoilRoot } from 'recoil';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
        <GlobalStyle />
        <App />
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
