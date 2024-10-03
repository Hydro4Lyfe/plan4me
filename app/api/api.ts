import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000 * 60 * 60,
})

export default api
