import React from "react";
import ReactDOM from "react-dom";
import { App } from "app";
import { Theme, Body } from "theme";
import { Store } from "store";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <Body>
        <Store>
          <App />
        </Store>
      </Body>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
