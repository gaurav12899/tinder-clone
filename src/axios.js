import axios from 'axios'
const instance= axios.create({
    baseURL: "https://practice-tinder-backend.herokuapp.com/"
})

export default instance
