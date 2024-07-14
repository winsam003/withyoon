import { API_BASE_URL } from "./app-config";
// => 필요시 사용 
import axios from "axios";

// 1. axios 요청 함수 
// => 요청시 필요한 정보를 매개변수로 전달받음
// => ACCESS_TOKEN 도 매개변수로 전달함

export async function apiCall(url, method, requestData, token) {

    // 파일 다운로드 요청인 경우
    if (url.includes('/downloadFile')) {
        // 파일 다운로드는 브라우저의 기본 다운로드 동작을 사용해야 하므로, axios로 요청 보내지 않음
        // 대신 파일의 다운로드 URL을 직접 사용하여 브라우저가 해당 파일을 다운로드하도록 유도함
        window.open(API_BASE_URL + url, '_blank');
        return;
    }

    // 1.1) headers & token
    // => indexOf('join')
    //  - JavasScript 의 문자열 확인함수
    //  - 존재하면 찾는문자열이 첫번째 나타나는 위치(index) 를 return,
    //    없으면 -1 dmf return



    let headers = '';
    if ((url.indexOf('qnaInsert') >= 0 || url.indexOf('eventinsert') >= 0 || url.indexOf('eventupdate') >= 0 || url.indexOf('bannerinsert') >= 0 || url.indexOf('noticeSubmit') >= 0 || url.indexOf('noticeModify') >= 0) && token != null) {
        headers = { 'Content-Type': 'multipart/form-data' };
    } else if (token !== null) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        };
    } else {
        headers = { 'Content-Type': 'application/json' };
    }

    // 1.2) axios 전송 options
    let options = {
        // url: API_BASE_URL + url,
        url: API_BASE_URL + url,
        method: method,
        headers: headers,
    };
    // => 전송할 Data 가 있으면 추가할수 있도록 "," 추가함    

    // 1.3) 전송 Data(requestData) 있는 경우 data 속성 추가
    if (requestData) {
        options.data = requestData;
    }

    // => 전달된 options 값들 확인

    // 2. Axios 요청
    return axios(options)
        .then(response => {
            return response.data;
        }).catch(err => {
            console.error(`** apiCall Error status=${err.response.status}, message=${err.message}`);
            return Promise.reject(err.response.data);
        }); //catch
} //apiCall