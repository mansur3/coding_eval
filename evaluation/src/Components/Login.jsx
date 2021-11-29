
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from "react";

import {loginSuccess} from "../Redux/Login/action.js";
import {Redirect} from "react-router-dom";

import {uuid} from "uuidv4";



export const Login = () => {

    const dispatch = useDispatch();
    const {isAuth, token} = useSelector((store) => store);
    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    if(isAuth) {
        return (
            <Redirect to = "/" />
        )
    }



    return (
        <div>
            <div>
                <input onChange = {(e) => setUsername(e.target.value)} type = "text" name = "userName" placeholder = "Enter the UserName" /><br />
                <input onChange = {(e) => setPassword(e.target.value)} type = "text" name = "password" placeholder = "Enter the password" /> <br />
                <button onClick = {() => {
                     const payload = {
                        isAuth: true,
                        token : uuid()
                    }
                    dispatch(loginSuccess(payload))
                }
                   
                }>
                    LOGIN
                </button>
            </div>
         </div>
    )
}