import React,{useEffect, useState} from 'react'
import Navigation from '../navigation/Navigation'
import Navbar from '../header/navbar'
import { useRecoilState } from 'recoil'
import { username_password } from '../../StoreUser'
import { Login, checkToken } from '../../Controller'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react'
import catLoaing from '/src/assets/Animation - 1702732952547.json'


export default function login() {
    const navigate = useNavigate()
    const [username_pass, setusername_pass] = useRecoilState(username_password)
    const [loading, setLoading] = useState(false)
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
      setLoading(true);
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
              .finally(() => {
                // Set loading state to false regardless of success or failure
                setLoading(false);
              });
            
        })
        .catch(err => {
          toast('Incorrect username or password.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(err)
        })
        .finally(() => {
          // Set loading state to false regardless of success or failure
          setLoading(false);
        });
    }

    useEffect(() => {
      if(loading){
        toast('Loading...', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }, [loading])



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

    {loading ? (
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
      <>
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
      </>
)}


  <Navigation />
  </div>
  )
}
