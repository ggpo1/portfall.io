import React from "react";
import ReactDOM from "react-dom";
import { App } from "app";
import { Theme, Body } from "theme";
import { Store } from "store";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Store.Provider>
      <Theme>
        <Body>
          <App />
        </Body>
      </Theme>
    </Store.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
