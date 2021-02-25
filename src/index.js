import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SimpleReactLightbox from 'simple-react-lightbox'
import ReactGA from 'react-ga';

import { BrowserRouter } from "react-router-dom";


const initGA = () => {
 
  ReactGA.initialize('UA-188949478-1', {
    debug: true
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
};
(function initAnalytics() {
  initGA();
})();

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>

        <SimpleReactLightbox>

  
        <App/>

  </SimpleReactLightbox>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
