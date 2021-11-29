import {LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR} from "./actionTypes.js";





export const loginLoading = () => ({type: LOGIN_ERROR})
export const loginSuccess = (data) => ({type : LOGIN_SUCCESS, payload : data})
export const loginError = (data) => ({type : LOGIN_SUCCESS, payload : data})