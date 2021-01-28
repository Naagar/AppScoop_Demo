import axios from 'axios';
import api from '../constants/constants';

export function loginRequest(apiUrl,data){
   // const url = api.apiIpPort + api.apiBaseUrl+apiUrl
    return axios({
        method:"post",
        url:apiUrl,
        data:data,
       // headers:header,
    })
}

export function postRequest(apiUrl,data){
    const url = api.apiIpPort + api.apiBaseUrl+apiUrl
    const header = {
         "Authorization":localStorage.getItem('JitToken'),
        'content-Type': 'application/json',
    }
    return axios({
        method:"post",
        url:url,
        data:data,
        headers:header
    })
}

export  function getRequest(apiUrl){
    
  //  const url = api.apiIpPort + api.apiBaseUrl + apiUrl ;
    const header ={
         "Authorization":localStorage.getItem('JitToken'),
        'content-Type': 'application/json',
    }
    return axios({
        method:'get',
        url:apiUrl,
        headers:header
    })
}
export function putRequest(apiUrl,data){
    const url = api.apiIpPort + api.apiBaseUrl+apiUrl
    const header = {
         "Authorization":localStorage.getItem('JitToken'),
        'content-Type': 'application/json',
    }
    return axios({
        method:"put",
        url:url,
        data:data,
        headers:header
    })
}