import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Todo from "./components/todos";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
