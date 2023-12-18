import { atom } from "recoil";

export const username_password = atom({
    key: 'username_pass', // unique ID (with respect to other atoms/selectors)
        default: {
            username: "",
            passwords: ""
        }
});

export const products = atom({
    key: 'products', // unique ID (with respect to other atoms/selectors)
        default: {
            productId: "",
            productName: "",
            quantity: "",
            price: "",
            username: ""
        }
})

export const resOfRegister = atom({
    key: 'datares',
        default: {
            resdataRegister: "",
            resdataLogin: "",
        }
})