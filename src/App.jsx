import React, { useEffect, useState } from "react";
import Navbar from "./components/header/navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import Carousel from "./components/carousel/carousel.jsx";
import Card from "./components/card/card.jsx";
import Stats from "./components/stats/stats.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import { useRecoilState } from "recoil";
import State from "./State.js";
import Lottie from "lottie-react";
import catLoaing from "/src/assets/Animation - 1702732952547.json";
import Sorry_warnning from "/src/assets/Warnning - 1702748099772.json";
import { browserName } from "react-device-detect";

import Swal from "sweetalert2";
import { Tryproducts, setProducts } from "./Controller.js";

function App() {
  const [isLoading, setisLoading] = useRecoilState(State);

  useEffect(() => {
    document.getElementById("my_modal_3").showModal();
  }, []);

  useEffect(() => {
    if (isLoading.loadingState > 7) {
      setisLoading({
        ...isLoading,
        loadingState: 7,
      });
    }
    if (isLoading.loadingState === 7) {
      document.getElementById("my_modal_3").close();
    }
  }, [isLoading]);

  useEffect(() => {
    const checkExternal = () => {
      if (
        browserName === "Line" ||
        browserName === "Facebook" ||
        browserName === "Instagram"
      ) {
        document.getElementById("my_modal_2").showModal();
        //close show load
        document.getElementById("my_modal_3").close();
      }
    };

    checkExternal();
  }, []);

  //open external support line
  const openExternal = () => {
    const WindownUrl = window.location.href;
    window.open(`${WindownUrl}?openExternalBrowser=1`);
  };

  //check purchase

  useEffect(() => {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Check if the success parameter is true
    const isSuccess = urlParams.get("success") === "true";

    if (isSuccess) {
      // Perform actions for a successful payment
      console.log("Payment successful!");
      //{"productId": productId,"productName": productName,"quantity": quantity,"price": price,"username": username}
      const username = window.localStorage.getItem("name");
      const token = window.localStorage.getItem("token");

      Tryproducts(username, 40000, token)
        .then((res) => {
          const tokenproducts = res.data.token
          setProducts(tokenproducts, "PURCHASED", 1, 29, username, token);
        })
      if (window.location.search.includes("success=true")) {
        // Remove the success parameter from the URL
        const newUrl = window.location.href.replace("?success=true", "");

        // Replace the current URL without the success parameter
        window.history.replaceState({}, document.title, newUrl);
      }

      Swal.fire({
        title: "Purchase",
        text: "Purchase successfully",
        icon: "success",
        confirmButtonText: "OK",
        allowOutsideClick: false, // Set this option to prevent tapping to exit
      }).then((result) => {
        // Check if the user clicked the "OK" button
        if (result.isConfirmed) {
          // Reload the website
          window.location.reload();
        }
      });
    }

    const isCanceled = urlParams.get("canceled") === "true";

    if (isCanceled) {
      if (window.location.search.includes("canceled=true")) {
        // Remove the success parameter from the URL
        const newUrl = window.location.href.replace("?canceled=true", "");

        // Replace the current URL without the success parameter
        window.history.replaceState({}, document.title, newUrl);
      }

      Swal.fire({
        title: "Purchase",
        text: "Purchase fail",
        icon: "error",
        confirmButtonText: "OK",
        allowOutsideClick: false, // Set this option to prevent tapping to exit
      }).then((result) => {
        // Check if the user clicked the "OK" button
        if (result.isConfirmed) {
          // Reload the website
          window.location.reload();
        }
      });
    }
  }, []); // The empty dependency array ensures that this effect runs only once after the component mounts

  useEffect(() => {
    const theme_change = window.localStorage.getItem("selectedTheme");
    document.querySelector("html").setAttribute("data-theme", "luxury");
    document.querySelector("html").setAttribute("data-theme", theme_change);
  }, []); // Empty dependency array ensures the effect runs once after the component mounts

  return (
    <div>
      <Navbar />

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog"></form>
          <div className="">
            <Lottie
              animationData={Sorry_warnning}
              loop={true}
              className="w-30"
            />
            <h3 className="font-bold text-lg flex justify-center">
              [SUPPORT] Warnning!
            </h3>
            <p className="py-4 flex justify-center">
              MTHEM ไม่ลองรับบราวเซอร์ {browserName} โปรดเปิดใน safari chrome
              brave หรือบราวเซอร์อื่น
            </p>
          </div>
          <div className="flex justify-center">
            <button className="btn" onClick={openExternal}>
              เปิดบราวเซอร์อื่น
            </button>
          </div>
        </div>
      </dialog>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex justify-center">
            <Lottie animationData={catLoaing} loop={true} className="w-30" />
          </div>
          {
            <p className="flex justify-center">
              loading... {isLoading.loadingState}
            </p>
          }
        </div>
      </dialog>
      <Hero />
      <Stats />
      <div className="text-3xl font-bold flex items-center justify-center bg-base-200">
        Getting You Start
      </div>
      <Carousel />
      <Card />
      <Navigation />
    </div>
  );
}

export default App;
