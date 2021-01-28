import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    loginErrorMsg: "",
    loader: false,
    loginStatus: false,

      getSubmissionDetailsLoader:false,
      getSubmissionDetailsList:null,
      getSubmissionDetailsTotalpages:1,
      getSubmissionDetailsError:"",
      getSubmissionDetailsNetissue:"",

      viewEmployeeDetailsLoader:false,
      viewEmployeeDetailsList:null,
     
}

export const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.LOGIN_INITIAL:
            return {
                ...state,
                loginErrorMsg: "",
                loader: true,
                loginStatus: false,
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loginStatus: action.payload,
                loginErrorMsg: "",
                loader: false,
            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                loginStatus: false,
                loginErrorMsg: action.payload,
                loader: false,
            }

                                    case actionTypes.GET_SUBMISSION_DETAILS_INITIAL:
                                        return {
                                            ...state,
                                            getSubmissionDetailsLoader:true,
                                            getSubmissionDetailsList:null,
                                            getSubmissionDetailsTotalpages:0,
                                            getSubmissionDetailsError:"",
                                            getSubmissionDetailsNetissue:""
                                        }
                                    case actionTypes.GET_SUBMISSION_DETAILS_SUCCESS:
                                        return {
                                            ...state,
                                            getSubmissionDetailsLoader:false,
                                            getSubmissionDetailsList:action.payload,
                                            getSubmissionDetailsTotalpages:action.totalPages,
                                            getSubmissionDetailsError:"",
                                            getSubmissionDetailsNetissue:""
                                        }
                                    case actionTypes.GET_SUBMISSION_DETAILS_FAIL:
                                        return {
                                            ...state,
                                            getSubmissionDetailsLoader:false,
                                            getSubmissionDetailsList:null,
                                            getSubmissionDetailsTotalpages:0,
                                            getSubmissionDetailsError:"",
                                            getSubmissionDetailsNetissue:""
                                        }
                                        case actionTypes.GET_SUBMISSION_DETAILS_NETWORK_ERROR:
                                        return {
                                            ...state,
                                            getSubmissionDetailsLoader:false,
                                            getSubmissionDetailsList:null,
                                            getSubmissionDetailsTotalpages:0,
                                            getSubmissionDetailsError:"",
                                            getSubmissionDetailsNetissue:""
                                        }

                                        case actionTypes.VIEW_EMPLOYEE_DETAILS_INITIAL:
                                            return {
                                                ...state,
                                                viewEmployeeDetailsLoader:true,
                                                viewEmployeeDetailsList:null,
                                              
                                            }
                                        case actionTypes.VIEW_EMPLOYEE_DETAILS_SUCCESS:
                                            return {
                                                ...state,
                                                viewEmployeeDetailsLoader:false,
                                                viewEmployeeDetailsList:action.payload,
                                               
                                            }
                                        case actionTypes.VIEW_EMPLOYEE_DETAILS_FAIL:
                                            return {
                                                ...state,
                                                viewEmployeeDetailsLoader:false,
                                                viewEmployeeDetailsList:null,
                                               
                                            }
                                            case actionTypes.VIEW_EMPLOYEE_DETAILS_NETWORK_ERROR:
                                            return {
                                                ...state,
                                                viewEmployeeDetailsLoader:false,
                                                viewEmployeeDetailsList:null,
                                               
                                            }
            default: return state
        }
    }