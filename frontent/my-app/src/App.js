import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Front from './Front.js';
import Product from './Product.js';
import PaymentPage from './PaymentPage.js'
import Login from './Login.js'


function App() {
  return (
    <>
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
  <Route path='/' element={<Front/>}></Route>
  <Route path='/' element={<Product/>}></Route>
  <Route path='/' element={<PaymentPage/>}></Route>
  </Routes>
  </BrowserRouter>

    </>
  );
}


export default App;

