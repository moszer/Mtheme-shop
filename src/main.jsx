import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Designs from './components/Designs/Designs.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import Login from './components/login-register/login.jsx'
import Register from './components/login-register/register.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import {
  RecoilRoot,
} from 'recoil';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Designs",
    element: <Designs />
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "Login",
    element: <Login />
  },
  {
    path: "Register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RecoilRoot>
      <div className="bg-base-200">
          <RouterProvider router={router} />
      </div>
     </RecoilRoot>
  </React.StrictMode>,
)
