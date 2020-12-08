import axios from 'axios';

const API_DEFAULT = "http://localhost:5000/";
const instance = axios.create({ baseURL: API_DEFAULT });


//회원 가입
export async function postSignUp(user) {
    const result = await instance.post('/user/join', {user});
    return result.data
}

//로그인
export async function postSignIn(user) {
    const result = await instance.post('/user/signIn', {user});
    return result.data
}

//메인 page 목록들
export async function getMainList() {
    const result = await instance.get('/');
    return result.data
}

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
export async function getFoodList(routeNm, restNm) {
    const result = await instance.get('/food/getFoodList/' + routeNm +'/'+ restNm);
    return result.data
}

//리뷰 작성
export async function postReview(routeNm, restNm, foodReview) {
    const result = await instance.post('/food/createReview/' + routeNm +'/'+ restNm, {foodReview});
    return result.data
}


export default {
    postSignUp,
    postSignIn,
    getMainList,
    getRouteNmList,
    getStdRestNmList,
    getFoodList,
    postReview
}