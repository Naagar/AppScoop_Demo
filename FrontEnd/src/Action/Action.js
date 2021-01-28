import * as actionTypes from './ActionTypes';
import {loginRequest,getRequest,postRequest,putRequest} from '../Helper/ApiHit'

export const getLogin = (email,password)=>{
    return (dispatch)=>{
           dispatch({type:actionTypes.LOGIN_INITIAL});
           loginRequest('/login',{
            "username":email,
            "password":password
           }).then(res=>{
            if(res.status ===200 ){
               console.log(res.data.jwttoken)
               let token="Bearer "+res.data.jwttoken
               localStorage.setItem('JitToken',token)
                return dispatch({
                    type:actionTypes.LOGIN_SUCCESS,
                    payload :true
                })    
            }
            else{
                 localStorage.setItem('JitToken','')
                return dispatch({
                    type:actionTypes.LOGIN_FAIL,
                    payload :res.data.responseData.message,
                })
            }
           })
           .catch(error =>{
            console.log(error)
             localStorage.setItem('JitToken','')
            return dispatch({
                type:actionTypes.LOGIN_FAIL,
                payload :"Server Error,Try Again"
            })
           })
    }
}

export const getSubmissionDetailsListMethod = (page,start,end)=>{
    return (dispatch)=>{
           dispatch({type:actionTypes.GET_SUBMISSION_DETAILS_INITIAL});
           getRequest(`/getEmployeeList?page=${page}&limit=7`)
           .then(res=>{
            if(res.data.responseStatus ===0 ){
                return dispatch({
                    type:actionTypes.GET_SUBMISSION_DETAILS_SUCCESS,
                    payload :res.data.responseData.employeelist,
                    totalPages:res.data.responseData.totalpage.totalNumberOfPagesAsPerGivenPageLimit
                })    
            }
            else{
                return dispatch({
                    type:actionTypes.GET_SUBMISSION_DETAILS_FAIL,
                    errorMsg:res.data.responseData.message
                   
                })
            }
           })
           .catch(error =>{
            return dispatch({
                type:actionTypes.GET_SUBMISSION_DETAILS_NETWORK_ERROR,
                errorMsg:"Network issues."
            })
           })
    }
}

export const viewEmployeeDetails = ()=>{
    return (dispatch)=>{
           dispatch({type:actionTypes.VIEW_EMPLOYEE_DETAILS_INITIAL});
           getRequest("/getEmployeeDetails/"+localStorage.getItem('employeeId'))
           .then(res=>{
            if(res.data.responseStatus ===0 ){
                return dispatch({
                    type:actionTypes.VIEW_EMPLOYEE_DETAILS_SUCCESS,
                    payload :res.data.responseData,
                })    
            }
            else{
                return dispatch({
                    type:actionTypes.VIEW_EMPLOYEE_DETAILS_FAIL,
                })
            }
           })
           .catch(error =>{
            return dispatch({
                type:actionTypes.VIEW_EMPLOYEE_DETAILS_NETWORK_ERROR,
            })
           })
    }
}

