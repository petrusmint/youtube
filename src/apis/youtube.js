import axios from 'axios'

const KEY = 'AIzaSyBX7yiSM-dp7A111xC4s5i6TFQi71d2IHU'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: `${KEY}`
    }
})