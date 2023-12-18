import { atom } from 'recoil'

const widgetData = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: {
      img: "https://i.ibb.co/BP80RYG/image.jpg",
      nav_color_text: "#000000",
      data_color_text: "#FFFFFF",
      widget_color_bg: "#000000",
      Nav_color_bg: "#FFFFFF",
      Image_have: false,
  }, // default value (aka initial value)
});

export default widgetData

