import React from 'react';

import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import GlobalFonts from './styles/fonts/pretendard'

import axios from "axios";

ReactDOM.createRoot(
document.getElementById("app")).
    render(
        <React.StrictMode>
            <GlobalFonts/>
            <App />
        </React.StrictMode>
    )
axios.defaults.baseURL = "/api";