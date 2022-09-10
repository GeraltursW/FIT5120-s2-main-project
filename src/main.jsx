import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { asyncComponent } from './components/AsyncComponent';
import Home from './components/Home/index';
import Navbar from './components/NavBar';
import Login from './components/Login';
import Calculator from './components/Calculator';
import './index.css'
// 异步导入
const Datav = asyncComponent(() => import("./components/Datavisualization/index"))
import NotFoundPage from './components/NotFoundPage/index'
import Tips from './components/Tips';
// import Datav from './components/Datavisualization/index'




ReactDOM.createRoot(document.getElementById('root')).render(

  
  localStorage.getItem("idToken") !=null ? 
  <div>
     <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/statistics" element={<Datav/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/tips" element={<Tips/>}></Route>
          <Route path="/calculator" element={<Calculator/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </div> : <Login/> 
 
 
)
