import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function convertToscriptable() {

    let ObjectWidget = window.localStorage.getItem("DataWidget");
    let username_password = window.localStorage.getItem("id_user")
    let dataW = JSON.parse(ObjectWidget)
    let id_user = JSON.parse(username_password)

    console.log("id_user: ", id_user)

    const username = id_user.username
    const passwords = id_user.password

    const nav_bg_color = dataW.Nav_color_bg
    const data_t_color = dataW.data_color_text
    const nav_t_color = dataW.nav_color_text
    const bg_color = dataW.widget_color_bg
    const imgUrl = dataW.img
    const selector_bg = dataW.Image_have

    const Key_value = "`${key} : ${value}`"
    const Name_days = "`${NameDay} | ${Thisday}`"
    const emoji = "`[ ${emoji[randomNumber]} ] ${item}`"
    /* 
    Warning 
    */
    const data = `
    /*

    HELLO WELLCOME TO MTHEME SHARE THIS TO SCRIPTAVBLE 

    ******MTHEME******

    คำเตือน: ห้ามแชร์ไฟล์นี้กับใคร

    การแบ่งปันหรือทำให้ไฟล์นี้เป็นที่รู้จักหรือเข้าถึงโดยบุคคลที่ไม่ได้รับอนุญาต 
    ถือเป็นการละเมิดลิขสิทธิ์และข้อกำหนดของ license ที่กำหนดไว้สำหรับซอฟต์แวร์นี้
    กรุณาใช้ไฟล์นี้อย่างระมัดระวังและเฉพาะกับวัตถุประสงค์ที่ได้รับอนุญาตจาก license เท่านั้น 
    การกระทำที่ละเมิดอาจทำให้เสียหายทางกฎหมายและมีผลสูงอันที่ไม่คาดคิด
    โปรดตรวจสอบ license ที่แนบมาพร้อมกับไฟล์นี้เพื่อทราบข้อกำหนดและเงื่อนไขที่เกี่ยวข้องกับการใช้งาน 
    และทำตามข้อกำหนดเหล่านั้นอย่างเคร่งครัด
    ขอบคุณที่ปฏิบัติตามข้อกำหนดและเงื่อนไขของ license 
    เพื่อประโยชน์ร่วมของทุกคนในชุมชนทางดิจิทัลนี้

    Warning: Do not share this file with anyone

    Sharing or making this file known to individuals who are not 
    authorized constitutes a violation of copyright and the terms 
    of the license specified for this software.
    Please use this file with caution and only for purposes permitted 
    by the license. Actions that constitute a breach may lead to legal 
    consequences and unexpected liabilities.
    Check the license accompanying this file for specific terms and 
    conditions related to its use. Adherence to these terms is crucial to 
    avoid legal repercussions.
    Thank you for complying with the terms and conditions of the license 
    for the mutual benefit of everyone in this digital community.

    ******MTHEME******

    */

    const request = new Request('https://api-table-rmutt.onrender.com/schedule');
    let handleData_ = []
    let NameDay = ""
    let Your_username = "${username}"
    let Your_password = "${passwords}"
    let Nav_color = "${nav_bg_color}" //691BAF ม่วง //FFC709 เหลือง //
    let text_color = "${data_t_color}"
    let Navtext_color = "${nav_t_color}"
    let Background_color = "${bg_color}"
    let imageURL = "${imgUrl}"
    let img_background = ${selector_bg}


    request.method = 'POST';

    // Set headers if needed
    request.headers = {
    'Content-Type': 'application/json'
    };

    // Set the request body
    const requestBody = {
    username_: Your_username,
    password_: Your_password,
    };

    request.body = JSON.stringify(requestBody);

    // Send the request and handle the response
    const response = await request.load();
    if (response) {
    
    const data = response.toRawString()
    const scheduleData = JSON.parse(data);
    
    const Monday_ = scheduleData.Day_2
    const Tuesday_ = scheduleData.Day_3
    const Wednesday_ = scheduleData.Day_4
    const Thursday_ = scheduleData.Day_5
    const Friday_ = scheduleData.Day_6
    const Saturday_ = scheduleData.Day_7
    const Sunday_ = scheduleData.Day_8
    
    function getDatatoArr(days_){
        for(const key in days_){
            if(key.startsWith("Nodata")){
            //console.log("NODATA")
            //handleData_.push("NODATA")
            } else {
            const value = days_[key]
            handleData_.push(${Key_value})
            }
        }
    }
    
    
    // Get the current date
    var currentDate = new Date();
    
    // Array of day names
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
    var dayIndex = currentDate.getDay();
    
    // Get the name of the day using the day index
    var dayName = daysOfWeek[dayIndex];
    
    NameDay = dayName 
    
    if(dayName === "Sunday"){
        getDatatoArr(Sunday_)
    }
    if(dayName === "Monday"){
        getDatatoArr(Monday_)
    }
    if(dayName === "Tuesday"){
        getDatatoArr(Tuesday_)
    }
    if(dayName === "Wednesday"){
        getDatatoArr(Wednesday_)
    }
    if(dayName === "Thursday"){
        getDatatoArr(Thursday_)
    }
    if(dayName === "Friday"){
        getDatatoArr(Friday_)
    }
    if(dayName === "Saturday"){
        getDatatoArr(Saturday_)
    }
    
    console.log(handleData_)
        
    }  else {
    console.log('Error making the request');
    }


    console.log(NameDay)


    const emoji = ['😀', '🤖', '🎃', '👌', '🤘', '😵‍💫', '😾', '😽', '😻', '😵', '😵‍💫', '😟', '😒', '😅', '🤓', '😦', '😪', '🤮', '🤥', '🫶', '😮‍💨', '🤗', '🤔', '🫣', '🤭', '👽', '👾', '🫀', '☀️', '🔥', '✨', '🌻', '🐓'];

    // Format the date as "MM/DD/YYYY"
    const Thisday = currentDate.toLocaleDateString('en-US', {
    month: '2-digit', // '2-digit' ensures leading zero for single-digit months
    day: '2-digit',   // '2-digit' ensures leading zero for single-digit days
    year: 'numeric'
    });

    
    const widget = new ListWidget()


    //set background color
    if(img_background){
    // Set the background image
    let img = await loadImage(imageURL);
    widget.backgroundImage = img;
    // Function to load an image from a URL
    async function loadImage(url) {
        const req = new Request(url);
        return await req.loadImage();
    }
    } else {
        widget.backgroundColor = new Color(Background_color)
    }

    // Create a horizontal stack
    const stack = widget.addStack()
    stack.layoutHorizontally()
    // Add title to the left side

    const title = stack.addText("Schedule")
    stack.backgroundColor = new Color(Nav_color);
    stack.setPadding(5, 5, 5, 5)
    stack.cornerRadius = 10
    title.centerAlignText()
    title.font = Font.systemFont(20)
    title.textColor = new Color(Navtext_color)



    // Add a spacer to push timeUpdate to the right side
    stack.addSpacer()

    // Add timeUpdate to the right side
    const timeUpdate = stack.addText(${Name_days})
    timeUpdate.rightAlignText()
    timeUpdate.font = Font.systemFont(10)
    timeUpdate.textColor = new Color(Navtext_color)

    widget.addSpacer(20)

    const lenemoji = emoji.length


    if(handleData_.length === 0){
    const Holiday_Field = widget.addStack();
    Holiday_Field.layoutHorizontally()
    Holiday_Field.addSpacer()
    const Holiday = Holiday_Field.addText("🍾 [ No class ] 🍾");
    Holiday.textColor = new Color(text_color)
    Holiday_Field.addSpacer()
    Holiday.centerAlignText()
    }

    for (const item of handleData_) {
        const dataField = widget.addStack();
        const randomNumber = Math.floor(Math.random() * lenemoji);
        const Data_ = dataField.addText(${emoji});
        Data_.font = Font.systemFont(10);
        Data_.textColor = new Color(text_color)
        dataField.setPadding(0, 0, 5, 5)
        Data_.font = new Font("System-Bold", 11)
        console.log(Data_.text)
    }

    widget.addSpacer()

    // Calculate the next day
    //const nextDay = new Date(currentDate);
    //nextDay.setDate(currentDate.getDate() + 1);
    //nextDay.setHours(1, 0, 0, 0); // Set the time to 8:00 AM, for example

    // Set widget
    Script.setWidget(widget)
    Script.complete()

    // Preview widget
    widget.presentMedium()
    `;


    // Create a Blob with the data
    const blob = new Blob([data], { type: 'application/javascript' });

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    let id_file = Math.floor(Math.random() * 9999); //random id
    downloadLink.download = `MTHEM_${id_file}.js`;

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to start the download
    // Trigger a click on the link to start the download
    downloadLink.click();

    // Remove the link from the document after a delay
    setTimeout(() => {
        document.body.removeChild(downloadLink);

        // Check if the file is still being downloaded
        if (downloadLink.parentNode) {
            console.error('Download failed or was blocked by the browser.');
        } else {
            console.log('Download successful.');
            toast('🤖 Downloading...', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }, 1000); // Adjust the delay as needed

    console.log(data)
}
