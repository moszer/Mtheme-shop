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


//asset
const widget_data = [
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
    }
];

function Designs() {


  const [fileImg, setfileImg] = useState(null)
  const [Widget_data, setWidget_data]= useRecoilState(widgetData)
  const State_ = useRecoilValue(State)
  

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


  const exportWidget = () => {
    console.log(Widget_data)
  }

  return (
    <>
      <ToastContainer />
      <Uploadimgur imgData={fileImg} />

      <Navbar />
        <div className='pt-5 pb-40'>
          <div className='flex justify-center'>DESIGNS</div>
          <Widget item={Widget_data} />
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
                    <img src="https://i.imgur.com/3402kkK.png" alt="" className="w-10" />
                  </label>
                </button>

                {/* text editer color */}
                <button className="btn w-25 bg-gray-300" onClick={()=>document.getElementById('my_modal_5').showModal()}>
                  <img src="https://i.imgur.com/hcyDYw4.png" alt="" className='w-10'/>
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
                  <img src="https://i.imgur.com/k77KhMp.png" alt="" className='w-10'/>
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


                <button className="btn w-25 bg-gray-300">
                    My Theme
                </button>
            </div>
            <div className='flex justify-center pt-5'>
              <button className="btn btn-primary" onClick={exportWidget}>Export to scriptable</button>
            </div>
        </div>
        <Navigation />
    </>
  )
}

export default Designs