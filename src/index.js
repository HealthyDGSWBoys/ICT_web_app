import React from 'react';

import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import GlobalFonts from './styles/fonts/pretendard'


ReactDOM.createRoot(
document.getElementById("app")).
    render(
        <React.StrictMode>
            <GlobalFonts/>
            <App />
        </React.StrictMode>
    )