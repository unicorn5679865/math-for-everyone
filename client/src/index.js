import React from 'react';
import './css/index.scss';
import App from './App';

import { createRoot } from "react-dom/client";

document.documentElement.classList.add('light')

createRoot(document.getElementById("app")).render(<App />);