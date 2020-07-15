import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'ustudio-ui/theme';
import { HashRouter } from 'react-router-dom';
import { App } from './core/app.component';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
