import React, { Component }  from 'react';

import logo from './logo.svg';
import './App.css';
import  {Nav_bar}  from './components/Nav_bar/index.js';
import { ServiceAccounts } from './pages/ServiceAccounts/index.js';
import { IAM } from './pages/IAM/index.js';
import { Azure } from './pages/Azure/index.js';
import  {Safes}  from './pages/Safes/index.js';
import { Vault } from './pages/Vault/index.js';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,Navigate
} from "react-router-dom"
function App() {
  return (

      <div className="App">
        <Nav_bar />
        <Routes>
          <Route path="/safes" element={<Safes/>}></Route>
          <Route path="/vault" element={<Vault/>}></Route>
          <Route path="/serviceAccounts" element={<ServiceAccounts/>}></Route>
          <Route path="/iam" element={<IAM/>}></Route>
          <Route path="/azure" element={<Azure/>}></Route>
          <Route path="*" element={<Navigate to ="/safes" />}/>
        </Routes>
      </div>



  );
}

export default App;
