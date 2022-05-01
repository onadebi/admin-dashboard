import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { storeKeeper } from "./store/storeKeeper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={storeKeeper}>
      <App />
    </Provider>
  </React.StrictMode>
);
