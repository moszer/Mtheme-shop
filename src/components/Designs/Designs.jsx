import React, {useEffect, useState} from 'react'
import Navbar from '/src/components/header/navbar.jsx'
import Widget from '/src/components/widgets/widget.jsx'
import Uploadimgur from '/src/components/ControllerDesings/UploadimageImgur.jsx'
import { useRecoilState, useRecoilValue } from 'recoil'
import widgetData from '../../Store'
import State from '../../State'
import { HexColorPicker } from "react-colorful";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from '../navigation/Navigation'
import convertToscriptable from '../../convertToscriptable'
import { checkToken, getDataProducts } from '../../Controller'
import Lottie from "lottie-react";
import Login_animation from "/src/assets/Login- 1703011367247.json"
import { useNavigate , Link} from 'react-router-dom'
//asset
const My_theme = [
  {
    img: "https://i.ibb.co/Z18LLCF/Purple-Scary-Halloween-Nightmare-Zoom-Virtual-Background.png",
    nav_color_text: "#FFFFF",
    data_color_text: "#FFFFFF",
    widget_color_bg: "blue-200",
    Nav_color_bg: "#691BAF",
    Image_have: true,
  },
  {
    img: "https://i.ibb.co/FbNJqx6/Cheese-Phone-Wallpaper.png",
    nav_color_text: "#000000",
    data_color_text: "#000000",
    widget_color_bg: "blue-200",
    Nav_color_bg: "#FFC709",
    Image_have: true,
  },
  {
      img: "https://i.ibb.co/1Tjf70s/iOS.png",
      nav_color_text: "#000000",
      data_color_text: "#000000",
      widget_color_bg: "blue-200",
      Nav_color_bg: "#FFFFFF",
      Image_have: true,
    },
    {
      img: "https://i.ibb.co/BP80RYG/image.jpg",
      nav_color_text: "#000000",
      data_color_text: "#000000",
      widget_color_bg: "blue-200",
      Nav_color_bg: "#FFFFFF",
      Image_have: true,
    },
    {
      img: "https://i.ibb.co/BP80RYG/image.jpg",
      nav_color_text: "#000000",
      data_color_text: "#FFFFFF",
      widget_color_bg: "#000000",
      Nav_color_bg: "#FFFFFF",
      Image_have: false,
    },
    {
      img: "https://i.ibb.co/BP80RYG/image.jpg",
      nav_color_text: "#FFFFFF",
      data_color_text: "#000000",
      widget_color_bg: "#FFFFFF",
      Nav_color_bg: "#000000",
      Image_have: false,
    }
];


function Designs() {

  const navigate = useNavigate()
  
  const [fileImg, setfileImg] = useState(null)
  const [Widget_data, setWidget_data]= useRecoilState(widgetData)
  const State_ = useRecoilValue(State)
  const [stateLogin, setstateLogin] = useState(false)
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setfileImg(file)
  };

  const [textColor, settextColor] = useState("#FFFFFF");
  const [textNavcolor, setTextNavcolor] = useState("#000000")

  //set color text to widget
  useEffect(() => {
    console.log(textColor)
    console.log(textNavcolor)
    
    setWidget_data({
      ...Widget_data,
      nav_color_text: textNavcolor,
      data_color_text: textColor
    })

  },[textColor, textNavcolor])


  const [Top_t_select, setTop_t_select] = useState(true);
  const [Bottom_t_select, setBottom_t_select] = useState(true);
  const [Button_edit, setButton_edit] = useState(false)
  const [Save_button, setSave_button] = useState(true)

  //text desings
  const Top_t_desings = () => {
    setTop_t_select(false) 
    setButton_edit(true) 
    setSave_button(false)
  };

  const Bottom_t_desings = () => {
    setBottom_t_select(false)
    setButton_edit(true) 
    setSave_button(false)
  };

  const SavetextColor = () => {
    setButton_edit(false)
    setTop_t_select(true)
    setBottom_t_select(true)
    setSave_button(true)
  }


  //background color controller
  const [btnBackground, setbtnBackground] = useState(false)
  const [bgSelector, setbgSelector] = useState(true)
  const [Save_button_bg, setSave_button_bg] = useState(true)
  const [colorBackground, setcolorBackground] = useState("#000000")


  const [NavbgSelector, setNavbgSelector] = useState(true)
  const [NavColor, setNavColor] = useState("#FFFFFF")


  const EditBackgroundColor = () => {
    setbgSelector(false)
    setbtnBackground(true)
    setSave_button_bg(false)
  }

  const SavebgColor = () => {
    setbgSelector(true)
    setbtnBackground(false)
    setSave_button_bg(true)
    setNavbgSelector(true)
  }

  const Editnavcolor = () => {
    setNavbgSelector(false)
    setbtnBackground(true)
    setSave_button_bg(false)
  }

  //set background color to widget
  useEffect(() => {

    setWidget_data({
      ...Widget_data,
      widget_color_bg: colorBackground,
      Image_have: false
    })
  }, [colorBackground])

  //setNavbar color
  useEffect(() => {
    setWidget_data({
      ...Widget_data,
      Nav_color_bg: NavColor
    })
  }, [NavColor])


  const [isFile, setisFile] = useState(false)
  useEffect(() => {
    if(State_.uploadState) {
      toast.error("[UPLOADING...]", {
        icon: "🚀"
      });
      setisFile(true)
    } 
    if(isFile === true && State_.uploadState === false){
      toast.success("[SUCCESS] ", {
        icon: "👊",
      });

      setWidget_data({
        ...Widget_data,
        Image_have: true
      })
    }
  }, [State_.uploadState]);

  //sava to localstorage
  useEffect(() => {
    window.localStorage.setItem("DataWidget", JSON.stringify(Widget_data));
  },[Widget_data])
  
  const exportWidget = () => {
    let ObjectWidget = window.localStorage.getItem("DataWidget");
    console.log(ObjectWidget)
    convertToscriptable()
  }


  const [myTheme, setmyTheme] = useState(null)
  useEffect(() => {
    if(myTheme !== null){
      setWidget_data({
        ...My_theme[myTheme],
      })
    }
  }, [myTheme])

  const successText = ["🎃 HolloWeen 🎃", "🧀 Cheese 🧀", "☁️ Cloud ☁️", "❄️ Snow ❄️", "⚫ Black ⚫", "⚪ white ⚪"]
  const handleThemeChange = (themeIndex) => {
    setmyTheme(themeIndex)
    toast(`${successText[themeIndex]}` , {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  //check user
  const token = window.localStorage.getItem("token")
  const name = window.localStorage.getItem("name")
  useEffect(() => {
    checkToken(token)
    .then(response => {
      console.log("checktoken: ", response)
      if(response.data === "Have a token"){
          setstateLogin(true)
      } 
    })
    getDataProducts(name, token)
      .then(response => {
        setdataproducts(response.data.products)
        if(response.data.products === null){
          toast("💸 Plese purchase before using this page 💸" , {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      })
  }, [])


if(stateLogin){
  return (
    <>
      <ToastContainer />
      <Uploadimgur imgData={fileImg} />
      <Navbar />
        <div className='pt-5 pb-40 bg-base-200 h-screen'>
          <div className='flex justify-center'>DESIGNS</div>
          
          <div className='flex pb-10 pt-5 justify-center'>
            <Widget item={Widget_data} className='rounded-3xl w-full' />
          </div>


          {/* image editer*/}
          <div className='flex gap-4 justify-center'>
                <button className="btn w-25 bg-gray-300">
                  {/* The label element is used to associate the button with the hidden file input */}
                  <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                    <input
                      type="file"
                      id="fileInput"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                   <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                  </svg>
                  </label>
                </button>

                {/* text editer color */}
                <button className="btn w-25 bg-gray-300" onClick={()=>document.getElementById('my_modal_5').showModal()}>
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 2V1h10v1M6 1v12m-2 0h4m3-6V6h6v1m-3-1v7m-1 0h2"/>
                </svg>  
                </button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-bottom">
                  
                    <div className="modal-box">
                      <div className=''>
                        <div className='flex justify-center pb-5'>
                            <p>Text Color</p>
                          </div>
                
                            <div className={`${Button_edit ? 'hidden' : ''} flex justify-center pb-2 gap-5`}>
                              <button className="btn btn-neutral w-44" name='top' onClick={Top_t_desings}>Edit Top</button>
                              <button className="btn btn-neutral w-44" name='bottom' onClick={Bottom_t_desings}>Edit Bottom</button>
                            </div>

                            <div className={`${Top_t_select ? 'hidden' : ''} flex justify-center`}>
                              <HexColorPicker color={textNavcolor} onChange={setTextNavcolor} />
                            </div>
                            <div className={`${Bottom_t_select ? 'hidden' : ''} flex justify-center`}>
                            <HexColorPicker color={textColor} onChange={settextColor} />
                            </div>
                            <div className={`${Save_button ? 'hidden' : ''} flex justify-center pt-3`}>
                              <button className="btn btn-neutral w-44" onClick={SavetextColor}>SAVE</button>
                            </div>
                      </div>

                    <div className="modal-action flex justify-center">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn w-screen bg-gray-200">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>


                {/* bg editer color */}
                <button className="btn w-25 bg-gray-300" onClick={()=>document.getElementById('my_modal_6').showModal()}>
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z"/>
                  <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z"/>
                  <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z"/>
                </svg>
                </button>
                <dialog id="my_modal_6" className="modal modal-bottom sm:modal-bottom">
                  
                    <div className="modal-box">
                      <div className=''>
                        <div className='flex justify-center pb-5'>
                            <p>Background Color</p>
                          </div>
                
                            <div className={`${btnBackground ? 'hidden' : ''} flex justify-center pb-2 gap-5`}>
                              <button className="btn btn-neutral w-44" name='top' onClick={EditBackgroundColor}>Edit Background</button>
                              <button className="btn btn-neutral w-44" name='top' onClick={Editnavcolor}>Edit Top Background</button>
                            </div>

                            <div className={`${bgSelector ? 'hidden' : ''} flex justify-center`}>
                              <HexColorPicker color={colorBackground} onChange={setcolorBackground} />
                            </div>
                            <div className={`${NavbgSelector ? 'hidden' : ''} flex justify-center`}>
                              <HexColorPicker color={NavColor} onChange={setNavColor} />
                            </div>
                            
                            <div className={`${Save_button_bg ? 'hidden' : ''} flex justify-center pt-3`}>
                              <button className="btn btn-neutral w-44" onClick={SavebgColor}>SAVE</button>
                            </div>
                      </div>

                    <div className="modal-action flex justify-center">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn w-screen bg-gray-200">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>


                {/* bg editer color */}
                <button className="btn w-25 bg-gray-300" onClick={()=>document.getElementById('my_modal_7').showModal()}>
                  My Theme
                </button>
                <dialog id="my_modal_7" className="modal modal-bottom sm:modal-bottom">
                  
                    <div className="modal-box">
                      <div className=''>
                        <div className='flex justify-center pb-5'>
                            <p>My Theme</p>
                        </div>

                        <div >
                          <div className='flex justify-center pb-2'>
                            <button className="btn bg-purple-500 w-full" onClick={() => handleThemeChange(0)}>🎃 HalloWeen 🎃</button>
                          </div>
                          <div className='flex justify-center pb-2'>
                            <button className="btn bg-yellow-300 w-full" onClick={() => handleThemeChange(1)}>🧀 Cheese 🧀</button>
                          </div>
                          <div className='flex justify-center pb-2'>
                            <button className="btn bg-blue-200 w-full" onClick={() => handleThemeChange(2)}>☁️ Cloud ☁️</button>
                          </div>
                          <div className='flex justify-center pb-2'>
                            <button className="btn bg-blue-300 w-full" onClick={() => handleThemeChange(3)}>❄️ Snow ❄️</button>
                          </div>
                          <div className='flex justify-center pb-2'>
                            <button className="btn bg-gray-600 w-full" onClick={() => handleThemeChange(4)}>⚫ Black ⚫</button>
                          </div>
                          <div className='flex justify-center pb-2'>
                            <button className="btn bg-gray-300 w-full" onClick={() => handleThemeChange(5)}>⚪ white ⚪</button>
                          </div>

                        </div>
                      </div>

                    <div className="modal-action flex justify-center">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn w-screen bg-gray-200">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>

            </div>
            <div className='flex justify-center pt-5'>
              <button className="btn btn-primary" onClick={exportWidget}>Export to scriptable</button>
            </div>
        </div>
        <Navigation />
    </>
  )
} else {
  return (
    <>
     <Navbar />
    <div className='h-screen flex flex-col justify-center items-center pb-52'>
          <Lottie animationData={Login_animation} loop={true} className='w-[250px]' style={{ margin: '-50px' }}/>
        <p>Please login or register before using</p>
        <div className='flex-row pt-3'>
          <div className='btn bg-primary mr-4 w-20'><Link to="/Login">Login</Link></div>
          <div className='btn bg-primary w-20'><Link to="/Register">Register</Link></div>
        </div>
    </div>
    <Navigation />
    </>
  )
}
}

export default Designs