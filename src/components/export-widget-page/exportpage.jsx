import React, { useEffect, useState } from 'react'
import Navbar from '../header/navbar'
import Navigation from '../navigation/Navigation'
import Swal from 'sweetalert2';
import { Getschedule } from '../../Controller';
import convertToscriptable from '../../convertToscriptable';
import Lottie from 'lottie-react';
import Check from '/src/assets/Check - 1703595979883.json'
import Arrow from '/src/assets/Downarrow - 1703597644598.json'
import WistiaPlayer from './WistiaPlayer';
function export_page() {

  const DownloadScriptableEvent = () => {
    // Replace the URL below with the desired App Store link
    const appStoreLink = 'https://apps.apple.com/th/app/scriptable/id1405459188';
    setcheck1(true)
    // Redirect to the App Store link
    window.location.href = appStoreLink;
  };

  const [id_user_login, setid_user_login] = useState(false)
  const [check_1, setcheck1] = useState(false)
  const [check_2, setcheck2] = useState(false)
  const [check_3, setcheck3] = useState(false)


  const SetUpId = async () => {
    const { value: formValues } = await Swal.fire({
      title: "รหัสนักศึกษา",
      html:
        '<div class="text-sm">ใช้รหัสนักศึกษาและพาสเวิดของงานทะเบียนเพื่อใช้ข้อมูลตารางสอน ตัวอย่าง <div class="flex justify-center"><div class="flex flex-row"><div class="pr-[4px]">username:</div><div class="text-red-900 bg-black w-fit">116510001001-2</div></div></div>   <div class="flex justify-center"><div class="flex flex-row"><div class="pr-[4px]">passwords:</div><div class="text-red-900 bg-black w-fit">XXXXXX</div></div></div></div>' +
        '<div class="my-4"><input type="text" placeholder="Your username" id="username" class="input input-bordered w-full max-w-xs p-2 text-primary" />' +
        '<div class="my-4"><input type="text" placeholder="Your password" id="password" class="input input-bordered w-full max-w-xs p-2 text-primary" />' +
        '<div class="text-red-900 text-sm pt-4">ห้ามใส่ password ผิดเกิน3ครั้งระบบจะล็อก<div>',
      showCancelButton: true,
      background: "#000000",
      confirmButtonText: "Login",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return new Promise(async (resolve) => {
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
  
          if (!username || !password) {
            Swal.showValidationMessage("กรุณากรอกทั้งชื่อผู้ใช้และรหัสผ่าน");
            resolve(false);
            setid_user_login(false)
          } else {
            try {
              const res = await Getschedule(username, password);
              if (res.data === "") {
                Swal.showValidationMessage('<div class="text-sm">กรุณาป้อนรหัสประจำตัวและรหัสผ่านให้ถูกต้อง</div>');
                setcheck2(false)
              } else {
                const id_user = {"username": username, "password": password};
                window.localStorage.setItem("id_user", JSON.stringify(id_user));
                console.log(res.data);
                setcheck2(true)
                setid_user_login(true)
              }
              // Process the response data as needed
              Swal.fire({
                title: "Good job!",
                html: `<div class="flex flex-col"><div class="text-red-900">${res.data.username[0].column3}</div><div class"">ล็อกอินสำเร็จโปรดทำขั้นตอนถัดไป<div></div>`,
                icon: "success",
                background: "#000000"
              });
              
              resolve(true); // Close the Swal modal
            } catch (error) {
              console.error("Error fetching schedule:", error);
              // Handle the error, e.g., display an error message to the user
              resolve(false);
              setcheck2(false)
              setid_user_login(false)
            }
          }
        });
      },
      customClass: {
        container: "swal-center", // Add a custom class for centering
      },
    });
  };

  const exportWidget = async () => {
    let id_user = window.localStorage.getItem("id_user")
    if(id_user && id_user_login){
      let ObjectWidget = window.localStorage.getItem("DataWidget");
      console.log(ObjectWidget);
      convertToscriptable();
      setcheck3(true)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Exported",
        customClass: "bg-base-200",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      setcheck3(false)
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "ERR",
        text: "โปรดทำขั้นตอนที่ 2 ให้เสร็จก่อน",
        customClass: "bg-base-200",
        showConfirmButton: false,
        timer: 5000,
      });
    }
    if(!id_user){
      setcheck3(false)
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "ERROR TOKEN",
        text: "ระบบผิดพลาดโปรดล็อกอินก่อนใช้งาน",
        customClass: "bg-base-200",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };

    //theme change update
    useEffect(() => {
      const theme_change = window.localStorage.getItem("selectedTheme");
      document.querySelector("html").setAttribute("data-theme", "luxury");
      document.querySelector("html").setAttribute("data-theme", theme_change);
    }, []); // Empty dependency array ensures the effect runs once after the component mounts

  return (
    <div className='w-screen h-[1500px]'>
        <Navbar />
        <div className='p-4 flex flex justify-center'>
          <div className='flex flex-col justify-center bg-base-300 p-5 rounded-xl'>
            <div className='flex justify-center text-xl'>วิธีติดตั้ง widget</div>
            <div className='text-sm'>Tip: ถ้าติดตั้งแอป Scriptable แล้วสามารถข้ามไปขั้นตอนที่ 2 ได้เลยโปรดดูคลิปสอนติดตั้งก่อนใช้งาน</div>
            <div className='pt-4'>
              {/* <WistiaPlayer videoId="7zmqux232b" wrapper="wistia-player-container-1" /> */}
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>คลิปสอนใช้งาน</button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box h-[600px] flex justify-center">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <WistiaPlayer videoId="7zmqux232b" wrapper="wistia-player-container-1" />
                  </div>
                </dialog>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-5'>
          <div className="flex w-[340px] justify-center flex-col">
            <div className="grid h-[200px] card bg-base-300 rounded-box place-items-center p-[10px]">
              1.ติดตั้งแอป Scriptable
              <div className='flex justify-center p-4'> 
              { check_1 ? (
                <Lottie animationData={Check} loop={false} className="w-[70px] m-[-50px]" />
              ) : <Lottie animationData={Arrow} loop={true} className="w-[70px] m-[-50px]" /> }
              </div>
            <button className='btn bg-primary w-[150px]' onClick={DownloadScriptableEvent}>Click to install</button>
            </div> 
            <div className="divider">⬇️</div> 
            <div className="grid h-[200px] card bg-base-300 rounded-box place-items-center p-[10px]">
              2.ใส่รหัสนักศึกษา
              <div className='flex justify-center p-4'> 
              { check_2 ? (
                <Lottie animationData={Check} loop={false} className="w-[70px] m-[-50px]" />
              ) : <Lottie animationData={Arrow} loop={true} className="w-[70px] m-[-50px]" /> }
              </div>
              <button className='btn bg-primary w-[150px]' onClick={SetUpId}>Login</button>
            </div>
            <div className="divider">⬇️</div> 
            <div className="grid h-[200px] card bg-base-300 rounded-box place-items-center p-[10px]">
              3.ดาวโหลด widgets
              <div className='flex justify-center p-4'> 
              { check_3 ? (
                <Lottie animationData={Check} loop={false} className="w-[70px] m-[-50px]" />
              ) : <Lottie animationData={Arrow} loop={true} className="w-[70px] m-[-50px]" /> }
              </div>
              <button className='btn bg-primary w-[150px]' onClick={exportWidget}>Download</button>
            </div>
            <div className="divider">⬇️</div> 
            <div className="grid h-[100px] card bg-base-300 rounded-box place-items-center p-[10px]">
              แชร์ widgets ที่ดาวโหลดไปที่แอป scriptable
              
            </div>
            <div className="divider">⬇️</div> 
            <div className="grid h-[100px] card bg-base-300 rounded-box place-items-center p-[10px]">
              Video สอนใช้งาน
              <button className='btn bg-primary w-[150px]' onClick={()=>document.getElementById('my_modal_3').showModal()}>คลิปสอนใช้งาน</button>
            </div>
          </div>
        </div>
        <Navigation />
    </div>
  )
}

export default export_page