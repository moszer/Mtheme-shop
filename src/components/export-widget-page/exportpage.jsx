import React, { useEffect } from 'react'
import Navbar from '../header/navbar'
import Navigation from '../navigation/Navigation'
import Swal from 'sweetalert2';
import { Getschedule } from '../../Controller';
import convertToscriptable from '../../convertToscriptable';
function export_page() {

  const DownloadScriptableEvent = () => {
    // Replace the URL below with the desired App Store link
    const appStoreLink = 'https://apps.apple.com/th/app/scriptable/id1405459188';
    
    // Redirect to the App Store link
    window.location.href = appStoreLink;
  };

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
          } else {
            try {
              const res = await Getschedule(username, password);
              if (res.data === "") {
                Swal.showValidationMessage("กรุณาป้อนรหัสประจำตัวและรหัสผ่านให้ถูกต้อง");
              } else {
                console.log(res.data);
              }
              // Process the response data as needed
              resolve(true); // Close the Swal modal
            } catch (error) {
              console.error("Error fetching schedule:", error);
              // Handle the error, e.g., display an error message to the user
              resolve(false);
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
    let ObjectWidget = window.localStorage.getItem("DataWidget");
    console.log(ObjectWidget);
    await convertToscriptable();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Exported",
      customClass: "bg-base-200",
      showConfirmButton: false,
      timer: 1500
    });
  };
  
  


  return (
    <div className='w-screen h-[900px]'>
        <Navbar />
        <div className='flex justify-center h-screen pt-[100px]'>
          <div className="flex w-[340px] justify-center flex-col pb-[100px]">
            <div className="grid h-[100px] card bg-base-300 rounded-box place-items-center p-[10px]">
              1.ติดตั้งแอป Scriptable
            <button className='btn bg-primary w-[150px]' onClick={DownloadScriptableEvent}>Click to install</button>
            </div> 
            <div className="divider">⬇️</div> 
            <div className="grid h-[100px] card bg-base-300 rounded-box place-items-center p-[10px]">
              2.ใส่รหัสนักศึกษา
              <button className='btn bg-primary w-[150px]' onClick={SetUpId}>Login</button>
            </div>
            <div className="divider">⬇️</div> 
            <div className="grid h-[100px] card bg-base-300 rounded-box place-items-center p-[10px]">
              3.ดาวโหลด widgets
              <button className='btn bg-primary w-[150px]' onClick={exportWidget}>Download</button>
            </div>
            <div className="divider">⬇️</div> 
            <div className="grid h-[100px] card bg-base-300 rounded-box place-items-center p-[10px]">
              แชร์ widgets ที่ดาวโหลดไปที่แอป scriptable
            </div>
            <div className="divider">⬇️</div> 
            <div className="grid h-[100px] card bg-base-300 rounded-box place-items-center p-[10px]">
              Video สอนใช้งาน
              <button className='btn bg-primary w-[150px]'>Click to learn</button>
            </div>
          </div>
        </div>
        <Navigation />
    </div>
  )
}

export default export_page