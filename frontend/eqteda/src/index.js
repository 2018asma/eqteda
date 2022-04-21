import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './css/style.css'
import App from './App';
import { ThemeProvider } from '@emotion/react';
import {appTheme} from './components/admin/Mui/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
