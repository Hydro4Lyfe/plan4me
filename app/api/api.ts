import axios from 'axios'

const api = axios.create({
    baseURL: "https://www.plan4meapp.com",
    timeout: 1000 * 60 * 60,
})

export default api
