import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { asyncComponent } from './components/AsyncComponent';
import Home from './components/Home/index';
import Navbar from './components/NavBar';
import Login from './components/Login';


import { TOP_ROUTE } from './constants/path';
import './index.css'
// 全局导入数据可视乎主题
import { G2 } from '@ant-design/plots'
import themeOptions from './g2-theme.json'

// 异步导入
const Datav = asyncComponent(() => import("./components/Datavisualization/index"))

import NotFoundPage from './components/NotFoundPage/index'
// import Datav from './components/Datavisualization/index'

const { registerTheme } = G2;
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
