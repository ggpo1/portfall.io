import React from "react";
import ReactDOM from "react-dom";
import { App } from "app";
import { Theme, Body } from "theme";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <Body>
        <App />
      </Body>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
