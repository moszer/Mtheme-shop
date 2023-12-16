import React, { useEffect, useState } from 'react';

function Widget({ item }) {
  const [widgetStyles, setWidgetStyles] = useState({
    navColorText: item.nav_color_text,
    dataColorText: item.data_color_text,
    widgetColorBg: item.widget_color_bg,
    navColorBg: item.Nav_color_bg,
    img: item.img,
    imageHave: item.Image_have,
  });

  useEffect(() => {
    // อัปเดต widgetStyles เมื่อ item เปลี่ยน
    setWidgetStyles({
      navColorText: item.nav_color_text,
      dataColorText: item.data_color_text,
      widgetColorBg: item.widget_color_bg,
      navColorBg: item.Nav_color_bg,
      img: item.img,
      imageHave: item.Image_have,
    });
  }, [item]);

  const widgetBgStyle = {
    backgroundImage: widgetStyles.imageHave ? `url("${widgetStyles.img}")` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: widgetStyles.imageHave ? 'transparent' : widgetStyles.widgetColorBg,
    borderRadius: '1rem'
  };

  const navHeaderStyle = {
    color: widgetStyles.navColorText,
    backgroundColor: widgetStyles.navColorBg,
  };

  const dataContentStyle = {
    color: widgetStyles.dataColorText,
  };

  return (
    <div className="flex items-center justify-center bg-white rounded-3xl">
      <div className="h-44 bg-blue-500 text-white flex items-center justify-center widget-bg" style={widgetBgStyle}>
        <div className="row">
          <div className="rounded-lg h-8 m-2 mt-0 flex items-center nav-bg" style={navHeaderStyle}>
            <div className="ml-2">Schedule</div>
            <div className="ml-auto pr-2 text-xs">Friday 12/11/2023</div>
          </div>
          <div className="row pt-5 pr-9 pl-2 data-content" style={dataContentStyle}>
                <p className="pb-1 text-xs">[ 😇 ] 01210020(3) Sec 6, รป 5-03รป13ชั้น เวลา: 9:00-12:00</p>
                <p className="pb-1 text-xs">[ 🙄 ] 01210020(3) Sec 6, รป 5-03รป13ชั้น เวลา: 9:00-12:00</p>
                <p className="pb-1 text-xs">[ 😯 ] 01210020(3) Sec 6, รป 5-03รป13ชั้น เวลา: 9:00-12:00</p>
                <p className="pb-1 text-xs">[ 😵‍💫 ] 01210020(3) Sec 6, รป 5-03รป13ชั้น เวลา: 9:00-12:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widget;
