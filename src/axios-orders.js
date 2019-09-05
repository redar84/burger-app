import axios from 'axios';
const instance = axios.create({
    baseURL: "https://react-my-burger-19f8c.firebaseio.com/"
})
export default instance;