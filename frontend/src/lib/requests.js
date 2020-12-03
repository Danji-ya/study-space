import axios from 'axios';

const API_DEFAULT = "http://localhost:5000/";
const instance = axios.create({ baseURL: API_DEFAULT });

//휴게소 노선
export async function getRouteNmList() {
    const result = await instance.get('/food/getRouteNmList');
    return result.data
}

//휴게소명 얻기
export async function getStdRestNmList(routeNm) {
    const result = await instance.get('/food/getStdRestNmList/'+routeNm);
    return result.data
}


//해당 휴게소의 음식 리스트 얻기
export async function getFoodList() {
    const result = await instance.get('/food/getFoodList');
    return result.data
}



export default {
    getRouteNmList,
    getStdRestNmList
}