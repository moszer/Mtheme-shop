import { atom } from 'recoil'

const State = atom({
    key: "state_",
    default: {
        uploadState: false
    }
})

export default State