// Frontend: Checkout.js

import React, { useEffect, useState } from 'react';
import { Purchase, getDataProducts } from '../../Controller';
import Navbar from '../header/navbar';
import Navigation from '../navigation/Navigation';
import Lottie from "lottie-react";
import Login_animation from "/src/assets/Login- 1703011367247.json"
import { useNavigate , Link} from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify';


function Checkout() {
  const name = window.localStorage.getItem("name")
  const token = window.localStorage.getItem("token")

  const [dataproducts, setdataproducts] = useState(null)

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const name = window.localStorage.getItem("name")
      getDataProducts(name ,token)
        .then(response => {
          setdataproducts(response.data.products)
        })
  }, [])

  const handleCheckout = async () => {
    try {

      const token = window.localStorage.getItem("token")
      Purchase(1, "http://172.20.10.4:5173", token)
        .then(response => {
            window.location.href = response.data.url; // Redirect to the Stripe checkout page
        })
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };


 // Initialize the state
 const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem('selectedTheme') || 'default'
  );

  // Function to handle theme change
 const handleThemeChange = async (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem('selectedTheme', theme);
    const theme_change = window.localStorage.getItem("selectedTheme")
    document. querySelector ("html"). setAttribute("data-theme", theme_change);
    toast(`Selected Theme: ${theme_change}`, { // Use the 'theme' parameter here
        position: "top-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toast-message bg-primary-content", // Use Tailwind CSS classes here
    });

};

  // Use useEffect to set the initial theme based on local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
      setSelectedTheme(storedTheme);
    }
  }, []);

  
  return (
    <>
    <Navbar />
    <ToastContainer />
    <div>
        <div class="overflow-hidden min-h-auto p-5">
                <h1 className='flex justify-center items-center p-2 rounded-xl w-full mb-4'>INFO USER</h1>
            <p class="whitespace-no-wrap text-sm animate-marquee">
                { token ? (
                    <>
                        <h1>USERNAME: {name}</h1>
                        <p className='flex flex-row'>TOKEN: <input type="text" placeholder={` ${token}`} className="w-full max-w-xs placeholder-red-900" /></p>
                    </>
                ) : (
                    <div className='flex justify-center h-screen items-center'>
                         <div className='h-screen flex flex-col justify-center items-center pb-52'>
                            <Lottie animationData={Login_animation} loop={true} className='w-[250px]' style={{ margin: '-50px' }}/>
                            <p>Please login or register before using</p>
                            <div className='flex-row pt-3'>
                            <div className='btn bg-primary mr-4 w-20'><Link to="/Login">Login</Link></div>
                            <div className='btn bg-primary w-20'><Link to="/Register">Register</Link></div>
                            </div>
                        </div>
                    </div>
                )}
                {dataproducts && (
                <>
                    <h1>STATUS: Purchased</h1>
                    <h1>PRODUCTNAME: {dataproducts.productName || "null"}</h1>
                    <h1>PRODUCTID: {dataproducts.productId || "null"}</h1>
                </>
                )}
            </p>
        </div>
    </div>

    {/* Your theme selection components */}
    <div className='flex flex-col p-4'>
        <h1 className='flex justify-center p-2 rounded-xl'>APP THEME</h1>
    <div>
      {/* Your theme selection components */}
      <div className="form-control">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">Default</span>
          <input
            type="radio"
            name="theme-radios"
            className="radio theme-controller"
            value="default"
            checked={selectedTheme === 'default'}
            onChange={() => handleThemeChange('default')}
          />
        </label>
      </div>
      {/* Repeat the above structure for other themes */}
      {/* ... */}


       {/* Your theme selection components */}
       <div className="form-control">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">light</span>
          <input
            type="radio"
            name="theme-radios"
            className="radio theme-controller"
            value="light"
            checked={selectedTheme === 'light'}
            onChange={() => handleThemeChange('light')}
          />
        </label>
      </div>
      {/* Repeat the above structure for other themes */}
      {/* ... */}

      {/* Your theme selection components */}
      <div className="form-control">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">synthwave</span>
          <input
            type="radio"
            name="theme-radios"
            className="radio theme-controller"
            value="synthwave"
            checked={selectedTheme === 'synthwave'}
            onChange={() => handleThemeChange('synthwave')}
          />
        </label>
      </div>
      {/* Repeat the above structure for other themes */}
      {/* ... */}


      {/* Your theme selection components */}
      <div className="form-control">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">lemonade</span>
          <input
            type="radio"
            name="theme-radios"
            className="radio theme-controller"
            value="lemonade"
            checked={selectedTheme === 'lemonade'}
            onChange={() => handleThemeChange('lemonade')}
          />
        </label>
      </div>
      {/* Repeat the above structure for other themes */}
      {/* ... */}

      {/* Your theme selection components */}
      <div className="form-control">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">autumn</span>
          <input
            type="radio"
            name="theme-radios"
            className="radio theme-controller"
            value="autumn"
            checked={selectedTheme === 'autumn'}
            onChange={() => handleThemeChange('autumn')}
          />
        </label>
      </div>
      {/* Repeat the above structure for other themes */}
      {/* ... */}

      <p>Selected Theme: {selectedTheme}</p>
    </div>
    </div>
    
    <Navigation />
  </>
  );
}

export default Checkout;
