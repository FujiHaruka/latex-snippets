import "semantic-ui-css/semantic.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MathJaxLoader } from "./MathJaxLoader";

ReactDOM.render(
  <React.StrictMode>
    <MathJaxLoader>
      <App />
    </MathJaxLoader>
  </React.StrictMode>,
  document.getElementById("root")
);
