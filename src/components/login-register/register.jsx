import React,{ useEffect, useState } from 'react'
import Navigation from '../navigation/Navigation'
import Navbar from '../header/navbar'
import { useRecoilState } from 'recoil';
import { resOfRegister, username_password } from '../../StoreUser';
import { useNavigate } from 'react-router-dom';
import { Register } from '../../Controller';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Lottie from 'lottie-react'
import catLoaing from '/src/assets/Animation - 1702732952547.json'

export default function register() {
      const navigation = useNavigate()
      const [username_, setusername] = useRecoilState(username_password);
      const [resRegister, setRegister] = useRecoilState(resOfRegister)
      const [Loading, setLoading] = useState(false)
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
      const registerEvent = async () => {
        setLoading(true)
        await Register(username_)
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

          setLoading(true)
      }

      //check register and direct to login
      useEffect(() => {
        const resdataRegister = window.localStorage.getItem("resdataRegister")
        if(resdataRegister === "Register Success"){
          console.log("YOU REGISTED")
          navigation("/Login")
        }
        if(resdataRegister === "You registed!!"){
          toast('If you already have this account, please use a different email address.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          window.localStorage.clear()
        }

      },[registerEvent])

  return (
    <div className='bg-base-200 h-screen pb-72'>
        <Navbar />
        <ToastContainer />
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}


    {Loading ? (
      <>
        <div className='flex justify-center items-center h-screen mt-[-100px]'>
        <div className='flex flex-col'>
          <Lottie animationData={catLoaing} loop={true} className='w-[250px]'/>
          <p className='flex justify-center pt-[20px]'>
            Loading plese wait a moment...
          </p>
        </div>
        </div>
      </>
    ):(

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
)}

    <Navigation />
  </div>
  )
}
