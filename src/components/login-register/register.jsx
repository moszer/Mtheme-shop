import React,{useEffect, useState} from 'react'
import Navigation from '../navigation/Navigation'
import Navbar from '../header/navbar'
import { useRecoilState } from 'recoil';
import { resOfRegister, username_password } from '../../StoreUser';
import { Link, useNavigate } from 'react-router-dom';
import { Register } from '../../Controller';

export default function register() {
      const navigation = useNavigate()
      const [username_, setusername] = useRecoilState(username_password);
      const [resRegister, setRegister] = useRecoilState(resOfRegister)
      const [isUser, setisUser] = useState(true)

      const getUsername = (e) =>{
        setusername({
            ...username_,
            username: e.target.value
        })
      }

      const getPassword = (e) => {
        setusername({
            ...username_,
            passwords: e.target.value
        })
      }

      useEffect(() => {

        console.log(username_)
        console.log(resRegister.resdataRegister)

      }, [username_, resRegister])


      //register event
      const registerEvent = () => {
        Register(username_)
          .then(response => {
            setRegister({
              ...resRegister,
                resdataRegister: response
            })
            window.localStorage.setItem("resdataRegister", response.data)
          })
          .catch(err => {
            console.log(err)
          })
      }


      useEffect(() => {
        const resdataRegister = window.localStorage.getItem("resdataRegister")
        if(resdataRegister === "You registed!!" || resdataRegister === "Register Success"){
          console.log("YOU REGISTED")
          setisUser(false)
          navigation("/Login")
        }

      },[registerEvent])

  if(true){
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
            Register
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-7">
          <div className=''>
            <label htmlFor="email" className="block text-sm font-medium leading-6">
              Email address
            </label>
            <div className="mt-2 flex justify-center">
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onChange={getUsername}/>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6">
                Password
              </label>
            </div>
            <div className="mt-2 flex justify-center">
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onChange={getPassword}/>
            </div>
          </div>

          <div className='flex justify-center pt-5'>
            <button className='btn bg-primary' onClick={registerEvent}>
                Register
            </button>
          </div>

       
      </div>
    </div>
    <Navigation />
  </div>
  )
} else {
    return(
        <div className='flex flex-col gap-5 h-screen justify-center items-center p-4'>
            <div className='flex justify-center'>
                <h1 className='text-1xl'>Have a User</h1>
            </div>
             <div className='flex justify-center gap-5'>
                <button className='btn bg-primary'>
                  <Link to="/">Homepage</Link>
                </button>
                <button className='btn bg-error text-white'>Logout</button>
             </div>
        </div>
    )
}
}
