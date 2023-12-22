import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Designs from './components/Designs/Designs.jsx';
import './index.css';
import Home from './components/Home/Home.jsx';
import Login from './components/login-register/Login.jsx'; // แก้ชื่อไฟล์
import Register from './components/login-register/Register.jsx';
import Checkout from './components/checkout/Checkout.jsx';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Designs',
    element: <Designs />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <Register />,
  },
  {
    path: '/Checkout',
    element: <Checkout />,
  },
]);

// createRoot ไม่จำเป็นในกรณีนี้ ใช้ ReactDOM.render แทน
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <div className="bg-base-200">
        <RouterProvider router={router} />
      </div>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
