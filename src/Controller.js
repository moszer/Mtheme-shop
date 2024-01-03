import axios from "axios";

export function Register(user) {
    const Username_pass = {

        "username": user.username,
        "passwords": user.passwords
    }
    return axios.post("https://wicked-teal-termite.cyclic.app/register", Username_pass)
}


export function Login(user) {
    const Username_pass = {

        "username": user.username,
        "passwords": user.passwords
    }
    return axios.post("https://wicked-teal-termite.cyclic.app/Login", Username_pass)
}

export function checkToken(token) {
    
    var data = '';

    var config = {
    method: 'post',
    url: 'https://wicked-teal-termite.cyclic.app/checkToken',
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

export function setProducts(productId, productName ,quantity ,price, username, token) {

    var data = JSON.stringify({"productId": productId,"productName": productName,"quantity": quantity,"price": price,"username": username});

    var config = {
    method: 'post',
    url: 'https://wicked-teal-termite.cyclic.app/products',
    headers: { 
        'authtoken': token,
        'Content-Type': 'application/json'
    },
    data : data
    };
    return axios(config)
        .catch(function (error) {
            console.log(error);
});
}


export function getDataProducts(data, token) {
    var data = JSON.stringify({"username": data});
    var config = {
    method: 'post',
    url: 'https://wicked-teal-termite.cyclic.app/getproducts',
    headers: { 
        'authtoken': token,
        'Content-Type': 'application/json'
    },
    data : data
    };

    return axios(config)
        .catch(function (error) {
        console.log(error);
});
}

export function Purchase(quantity, domain , token) {
    var data = JSON.stringify({"quantity":quantity,"domain":domain});

    var config = {
      method: 'post',
      url: 'https://wicked-teal-termite.cyclic.app/create-checkout-session',
      headers: { 
        'authtoken': token,
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    return axios(config)
        .catch(function (error) {
            console.log(error);
        });
}


export function Tryproducts(name, days , token) {

    var data = JSON.stringify({

        "username":name,
        "day":days

    });

    var config = {
      method: 'post',
      url: 'https://wicked-teal-termite.cyclic.app/tryproducts',
      headers: { 
        'authtoken': token,
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    return axios(config)
        .catch(function (error) {
            console.log(error);
});
}

export function Getschedule(username, password) {
    // Create the data payload
    var data = JSON.stringify({ "username_": username, "password_": password });

    // Set up the axios request configuration
    var config = {
        method: 'post',
        url: 'https://api-table-rmutt.onrender.com/schedule',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config)
        .catch(error => {
            console.error('Error fetching schedule:', error);
            throw error;
        });
}