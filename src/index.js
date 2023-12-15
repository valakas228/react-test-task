import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/reducer";
import initialState from "./store/store";

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const app = ReactDOMClient.createRoot(document.getElementById("root"));

app.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
