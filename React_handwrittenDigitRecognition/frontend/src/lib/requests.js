import axios from 'axios';

const API_DEFAULT = "http://localhost:5000/";
const instance = axios.create({ baseURL: API_DEFAULT });

// predict number
export async function postNumberImg(img_data) {
    
    let payload = {img_base64: img_data}
    const result = await instance.post('/predict', payload);
    return result.data
    }


export default {
    postNumberImg
}
