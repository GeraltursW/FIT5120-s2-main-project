import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { G2 } from '@ant-design/plots'
import themeOptions from './g2-theme.json'

const { registerTheme } = G2;
console.log(themeOptions)
registerTheme('custom-theme', themeOptions);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
