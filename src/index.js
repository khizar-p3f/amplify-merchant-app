import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import LandingPageMain from "./landing";
import MerchantDashboard from './maindashboard'
import reportWebVitals from "./reportWebVitals";
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import { store } from './store'
import { Provider } from 'react-redux'

Amplify.configure(awsExports);


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <Router basepath="/">
        <LandingPageMain path="/*" />
        <MerchantDashboard path="/app/*" />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();