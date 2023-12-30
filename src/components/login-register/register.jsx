import React, { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import Navbar from "../header/navbar";
import { useRecoilState } from "recoil";
import { username_password } from "../../StoreUser";
import { useNavigate } from "react-router-dom";
import { Register } from "../../Controller";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Lottie from "lottie-react";
import catLoaing from "/src/assets/Animation - 1702732952547.json";
import Swal from "sweetalert2";
import PasswordValidator from "password-validator";

export default function register() {
  const navigation = useNavigate();
  const [username_, setusername] = useRecoilState(username_password);
  const [Loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const getUsername = (e) => {
    setusername({
      ...username_,
      username: e.target.value,
    });
  };

  const getPassword = (e) => {
    setusername({
      ...username_,
      passwords: e.target.value,
    });
  };

  useEffect(() => {
    console.log(username_);
  }, [username_]);

  const registerEvent = async () => {
    try {

      //check input
      if (!checkInput()) {
        return console.log("err input");
      }

      setLoading(true);

      // Assuming Register is an asynchronous function, use await directly
      const response = await Register(username_);

      // Use localStorage.setItem with a key-value pair
      window.localStorage.setItem("resdataRegister", response.data);

      if (response.data === "Register Success") {
        console.log("YOU REGISTED");
        navigation("/Login");
      }

      if (response.data === "You registed!!") {
        toast(
          "If you already have this account, please use a different email address.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
        window.localStorage.clear();
      }

      setLoading(false); // Set loading to false after the operation is complete
    } catch (err) {
      console.error(err);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //check password input
  const checkInput = () => {
    const username = username_.username;
    const passwords = username_.passwords;

    if (
      username === null ||
      passwords === null ||
      username === "" ||
      passwords === ""
    ) {
      Swal.fire({
        title: "ERROR",
        text: `โปรดกรอกข้อมูลให้ครบก่อนลงทะเบียน`,
        customClass: "bg-base-200",
        icon: "error",
      });
      return false;
    } else if (!isValidUsername(username)) {
      Swal.fire({
        title: "ERROR",
        html: `<div class="flex flex-col"><p>กรุณาใส่ชื่อผู้ใช้หรืออีเมลที่ถูกต้อง</p><p class="text-red-900">ตัวอย่าง: somchai_praduke123@gmail.com</p></div>`,
        customClass: "bg-base-200",
        icon: "error",
      });
      return false;
    } else if(!checkPassword(passwords)){
      Swal.fire({
        title: "ERROR",
        html: `
        <div class="flex flex-col">
          <p>ความยาวขั้นต่ำ8ตัว</p>
          <p>ความยาวสูงสุด 100ตัว</p>
          <p>ต้องมีอักษรตัวพิมพ์ใหญ่</p>
          <p>ต้องมีอักษรตัวพิมพ์เล็ก</p>
          <p>ต้องมีตัวเลขอย่างน้อย2ตัว</p>
          <p>ไม่ควรมีช่องว่าง</p>
          <p class="text-red-900">ตัวอย่าง: Somchai1234</p>
        </div>`,
        customClass: "bg-base-200",
        icon: "error",
      });
      return false;
    } else {
      return true;
    }
  };

  function isValidUsername(username) {
    // Add your validation logic for the username or email here
    // For example, you can use a regular expression to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(username);
  }

  //check charector password
  function checkPassword(pass)
  {
    var schema = new PasswordValidator();
    schema
      .is().min(8)                                    // Minimum length 8
      .is().max(100)                                  // Maximum length 100
      .has().uppercase()                              // Must have uppercase letters
      .has().lowercase()                              // Must have lowercase letters
      .has().digits(2)                                // Must have at least 2 digits
      .has().not().spaces()                           // Should not have spaces
      .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

      return schema.validate(pass)
  }


  return (
    <div className="bg-base-200 h-screen pb-72">
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
          <div className="flex justify-center items-center h-screen mt-[-100px]">
            <div className="flex flex-col">
              <Lottie
                animationData={catLoaing}
                loop={true}
                className="w-[250px]"
              />
              <p className="flex justify-center pt-[20px]">
                Loading plese wait a moment...
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex min-h-full flex-col justify-center px-7 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Register
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-7">
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2 flex justify-center">
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  onChange={getUsername}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 flex justify-center relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full max-w-xs"
                  onChange={getPassword}
                />
                <button
                  onClick={handleTogglePasswordVisibility}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? (
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 14"
                    >
                      <g
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                      </g>
                    </svg>
                  ) : (
                    <svg
                      class="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-center pt-5">
              <button className="btn bg-primary" onClick={registerEvent}>
                Register
              </button>
            </div>
          </div>
        </div>
      )}

      <Navigation />
    </div>
  );
}
