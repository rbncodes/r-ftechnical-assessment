import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';
import Unauthorized from './pages/Unauthorized';



const App = () => {

  return (
    <Provider store={store}>
    <div className="App">
       <BrowserRouter>
         <Routes>
           <Route index element={<Login />} />
           <Route path="/login" element={<Login />} />
           <Route path="/home" element={<Home />} />
           <Route path="/account" element={<Account />} />
           <Route path="*" element={<Unauthorized />} />
         </Routes>
       </BrowserRouter>
    </div>
    </Provider>
  )
}

export default App
