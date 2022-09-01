import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/index';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage/index'
import Datav from './components/Datavisualization/index'
import { TOP_ROUTE } from './constants/path';
import './index.css'
import { G2 } from '@ant-design/plots'
import themeOptions from './g2-theme.json'
import Navbar from './components/NavBar';

const { registerTheme } = G2;




console.log(themeOptions)
registerTheme('custom-theme', themeOptions);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/statistics" element={<Datav/>}></Route>

          <Route path="/login" element={<Login/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
