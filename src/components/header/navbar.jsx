import React, { useEffect, useState } from "react";
import { checkToken, getDataProducts } from "../../Controller";

import {
  Link,
} from "react-router-dom";

function navbar() {
  const [isUser, setisUser] = useState(false);
  const [name, setname] = useState(null);
  const [dataproducts, setdataproducts] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const name = window.localStorage.getItem("name");
    checkToken(token).then((response) => {
      console.log("checktoken: ", response);
      if (response.data === "Have a token") {
        setisUser(true);
        setname(name);
      }
    });

    getDataProducts(name, token).then((response) => {
      const tryForFreeProduct = response.data.products.find(product => product.productName === "TRYFORFREE");
      const PurchaseProduct = response.data.products.find(product => product.productName === "PURCHASED");
      if (tryForFreeProduct) {
        
        setdataproducts(tryForFreeProduct)
        
        console.log("Product ID:", tryForFreeProduct._id);
        console.log("Product Name:", tryForFreeProduct.productName);
        console.log("Quantity:", tryForFreeProduct.quantity);
        console.log("Price:", tryForFreeProduct.price);
        console.log("Username:", tryForFreeProduct.username);
        console.log("__v:", tryForFreeProduct.__v);
      } else {
        console.log("Product with productName 'TRYFORFREE' not found.");
      }

      if (PurchaseProduct) {

        setdataproducts(PurchaseProduct)

        console.log("Product ID:", PurchaseProduct._id);
        console.log("Product Name:", PurchaseProduct.productName);
        console.log("Quantity:", PurchaseProduct.quantity);
        console.log("Price:", PurchaseProduct.price);
        console.log("Username:", PurchaseProduct.username);
        console.log("__v:", PurchaseProduct.__v);
      } else {
        console.log("Product with productName 'PURCHASED' not found.");
      }

    });
  }, []);

  useEffect(() => {
    console.log(dataproducts);
  }, [dataproducts]);

  const logoutEvent = () => {
    window.localStorage.clear();
    setisUser(false);
    window.location.reload();
  };

  const username_of_show = (name ?? "").substring(0, 4);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MTHEME</a>
      </div>
      <div>{name ? <p>{username_of_show}...</p> : <p></p>}</div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 21"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {dataproducts?.quantity || 0}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">
                {dataproducts ? <p className="flex justify-center">{dataproducts.productName}</p> : <p>Not purchase</p>}
              </span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">
                  View package
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <Link to="/Checkout">Settings</Link>
            </li>
            {isUser ? (
              // If the user is logged in
              <>
                {/* Render user-related content */}
                <li>
                  <a onClick={logoutEvent}>Logout</a>
                </li>
              </>
            ) : (
              // If the user is not logged in
              <>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <Link to="/Register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default navbar;
