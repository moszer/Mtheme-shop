import { atom } from 'recoil'

const State = atom({
    key: "state_",
    default: {
        uploadState: false,
        loadingState: 0
    }
})

export default State