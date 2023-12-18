import axios from "axios";

export function Register(user) {
    const Username_pass = {

        "username": user.username,
        "passwords": user.passwords
    }
    return axios.post("http://172.20.10.4:3000/register", Username_pass)
}


export function Login(user) {
    const Username_pass = {

        "username": user.username,
        "passwords": user.passwords
    }
    return axios.post("http://172.20.10.4:3000/Login", Username_pass)
}

export function checkToken(token) {
    
    var data = '';

    var config = {
    method: 'post',
    url: 'http://172.20.10.4:3000/checkToken',
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
