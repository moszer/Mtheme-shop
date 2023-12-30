import { CheckIcon } from "@heroicons/react/20/solid";
import Carousel_noblackground from "../carousel/carousel_noblackground";
import { Purchase, checkToken, getDataProducts } from "../../Controller";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const includedFeatures = [
  "Generate with ID: สร้างตารางเรียนด้วยรหัสนักศึกษา",
  "Realtime Update: ตารางเรียนของคุณจะอัปเดตแบบ Realtime ทันที!",
  "Emoji: สุ่มอิโมจิในแต่ละวัน 🎉📚",
  "Customizable Widgets: ปรับแต่งตามความต้องการของคุณได้ตามใจชอบ! 🛠️",
  "Easy Payment with Stripe: ชำระเงินได้ง่ายด้วยระบบ Payment Gateway ที่ปลอดภัย! 💳💰",
];

export default function Example() {

  const [stateLogin, setstateLogin] = useState(false)
  const [dataproducts, setdataproducts] = useState(null)

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const name = window.localStorage.getItem("name")
    checkToken(token).then((response) => {
      console.log("checktoken: ", response);
      if (response.data === "Have a token") {
        setstateLogin(true);
      }
    });
      getDataProducts(name, token).then((response) => {
        const tryForFreeProduct = response.data.products.find(product => product.productName === "TRYFORFREE");
        const PurchaseProduct = response.data.products.find(product => product.productName === "PURCHASED");
  
        //check token invalid
  
        if (tryForFreeProduct) {
          
          setdataproducts(tryForFreeProduct)
  
        } else {
          console.log("Product with productName 'TRYFORFREE' not found.");
        }
  
        if (PurchaseProduct) {
  
          setdataproducts(PurchaseProduct)
  
        } else {
          console.log("Product with productName 'PURCHASED' not found.");
        }
  
      }) .catch(() => {
  
        console.log("no data in db")
        if(stateLogin){
          alert_try_purchase()
        }
      })
  }, [stateLogin]);


  //checkout
  const handleCheckout = async () => {
    try {
        const token = window.localStorage.getItem("token");
        const currentUrl = window.location.href;
      if(stateLogin && dataproducts === null){
        Purchase(1, currentUrl, token).then((response) => {
          window.location.href = response.data.url; // Redirect to the Stripe checkout page
        });
      } else if(!stateLogin) {
        Swal.fire({
          title: "ERROR",
          text: "[ โปรดล็อกอินก่อนชำระเงิน ]",
          confirmButtonText: "OK",
          customClass: "bg-base-200",
          icon: "error"
        });
      } else if(dataproducts !== null){
        Swal.fire({
          title: "SUCCESS",
          text: "[ ชำระเงินแล้ว ]",
          confirmButtonText: "OK",
          customClass: "bg-base-200",
          icon: "success"
        });
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };


  return (
    <div className="bg-base-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Easy Convenient Fast
          </h2>
          <p className="mt-6 text-lg leading-8">
            ทำให้การซื้อเป็นเรื่องง่ายและสะดวก
            เพียงไม่กี่ขั้นตอนท่านก็สามารถเพลิดเพลินกับ Widget Table
            ได้อย่างรวดเร็ว
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight">
              📆 สั่งซื้อทันที!
            </h3>
            <p className="mt-6 text-base leading-7">
              เพิ่มความสะดวกสบายในการดูตารางเรียนของคุณด้วย Widget Table ของเรา!
              📆
            </p>
            <p className="mt-6 text-base leading-7">
              🌐 สั่งซื้อทันทีและเพิ่มความสะดวกในชีวิตประจำวันของคุณ! 🔥🛒
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6">
                สิทธิ์การใช้งาน
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-base-300 py-10 m-2 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="pb-10">ธีมเริ่มต้นที่จะได้</p>
                <p className="text-base font-semibold text-gray-600">
                  <Carousel_noblackground />
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">
                    29.00
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide">
                    บาท
                  </span>
                </p>
                <a
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleCheckout}
                >
                  ซื้อ
                </a>
                <p className="mt-6 text-xs leading-5">
                  ใบแจ้งหนี้และใบเสร็จให้บริษัทท่านสะดวกต่อการเรียกเก็บเงิน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
