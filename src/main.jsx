import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import axios from "axios";

// axios.defaults.baseURL = "https://rickandmorty-backend-production-9078.up.railway.app"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
