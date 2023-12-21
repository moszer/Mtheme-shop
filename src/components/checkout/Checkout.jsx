// Frontend: Checkout.js

import React, { useEffect, useState } from 'react';
import { Purchase, getDataProducts } from '../../Controller';
import Navbar from '../header/navbar';
import Navigation from '../navigation/Navigation';
import Lottie from "lottie-react";
import Login_animation from "/src/assets/Login- 1703011367247.json"
import { useNavigate , Link} from 'react-router-dom'

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

  return (
    <>
    <Navbar />
    <div>
        <div class="overflow-hidden min-h-auto p-5">
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
<Navigation />
  </>
  );
}

export default Checkout;
