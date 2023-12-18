import React,{useEffect, useState} from 'react'
import Navigation from '../navigation/Navigation'
import Navbar from '../header/navbar'
import { useRecoilState } from 'recoil'
import { username_password } from '../../StoreUser'
import { Login, checkToken } from '../../Controller'
import { useNavigate } from 'react-router-dom'

export default function login() {
    const navigate = useNavigate()
    const [username_pass, setusername_pass] = useRecoilState(username_password)

    const usernameEvent = (e) => {
      console.log(e.target.value)
      setusername_pass({
        ...username_pass,
            username: e.target.value
      })
    }
    const passwordsEvent = (e) => {
      console.log(e.target.value)
      setusername_pass({
        ...username_pass,
            passwords: e.target.value
      })
    }

    //Login Event
    const loginEvent = async () => {
      Login(username_pass)
        .then(response => {
          window.localStorage.setItem('token', "remove");
          window.localStorage.setItem("token", response.data.token)
          window.localStorage.setItem("name", response.data.payload.user.name)
          console.log(response)

          const token = window.localStorage.getItem("token")

          checkToken(token)
              .then(response => {
                console.log("checktoken: ", response)
                if(response.data === "Have a token"){
                  navigate("/")
                }
              })
            
        })
        .catch(err => {
          console.log(err)
        })
    }


  return (
    <div className='bg-base-200 h-screen pb-72'>
        <Navbar />
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}
    <div className="flex min-h-full flex-col justify-center px-7 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-7">
          <div className=''>
            <label htmlFor="email" className="block text-sm font-medium leading-6">
              Email address
            </label>
            <div className="mt-2 flex justify-center">
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onChange={usernameEvent}/>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6">
                Password
              </label>
            </div>
            <div className="mt-2 flex justify-center">
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onChange={passwordsEvent}/>
            </div>
          </div>

          <div className='flex justify-center pt-5'>
           <button className='btn bg-primary' onClick={loginEvent}>
              Login
           </button>
          </div>

       
      </div>
    </div>
    <Navigation />
  </div>
  )
}
