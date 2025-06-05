// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import GeoViewMap from './GeoViewMap';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <GeoViewMap />
//   </StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import i18n from './i18n'; 
import { I18nextProvider } from 'react-i18next';
import './index.css';
import '@cdssnc/gcds-components-react/gcds.css';

i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

ReactDOM.createRoot(document.getElementById('react-root')).render(
  <React.StrictMode>
    {/* <I18nextProvider i18n={i18n}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </I18nextProvider> */}
  </React.StrictMode>,
);
