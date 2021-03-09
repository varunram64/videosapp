import axios from 'axios';

const KEY = "AIzaSyD0ZeNpCpXdEltb--QPU5wKYQjAq1dwT20";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResult: 5,
        key: KEY
    }
});