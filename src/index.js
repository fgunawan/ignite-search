import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//redux setup
import { createStore, applyMiddleware, compose } from "redux"; //have to apply midleware in order to combine the window.redux devtools with the thunk stuff added to store
import rootReducer from "./reducers"; //we set up rootReducer to combine all the reducers into one and import that so we can use it in entire app. if we just imported the reducers separately, we couldn't combine thm in the createStore() bc it only takes in 2 params, reducer and dev tools
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
