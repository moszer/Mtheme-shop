import React, {useEffect, useState} from 'react'
import { checkToken } from '../../Controller';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function navbar() {
  const [isUser, setisUser] = useState(false)
  const [name, setname] = useState(null)

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const name = window.localStorage.getItem("name")
    checkToken(token)
      .then(response => {
        console.log("checktoken: ", response)
        if(response.data === "Have a token"){
          setisUser(true)
          setname(name)
        }
      })
  }, [])

  const logoutEvent = () => {
    window.localStorage.clear();
    setisUser(false)
    window.location.reload();
  }

  return (
          <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">MTHEME</a>
        </div>
        <div>
            {name ? (
              <p>{name}</p>
            ) : (
              <p></p>
            )}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              {isUser ? (
                  // If the user is logged in
                  <>
                    {/* Render user-related content */}
                    <li><a onClick={logoutEvent}>Logout</a></li>
                  </>
                ) : (
                  // If the user is not logged in
                  <>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                  </>
                )}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default navbar