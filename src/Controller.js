import axios from "axios";

export function Register(user) {
    const Username_pass = {

        "username": user.username,
        "passwords": user.passwords
    }
    return axios.post("https://register-register-mtheme.onrender.com/register", Username_pass)
}


export function Login(user) {
    const Username_pass = {

        "username": user.username,
        "passwords": user.passwords
    }
    return axios.post("https://register-register-mtheme.onrender.com/Login", Username_pass)
}

export function checkToken(token) {
    
    var data = '';

    var config = {
    method: 'post',
    url: 'https://register-register-mtheme.onrender.com/checkToken',
    headers: { 
        'authtoken': token
    },
     data : data
    };

    return axios(config)
        
    .catch(function (error) {
        console.log(error);
});
}
