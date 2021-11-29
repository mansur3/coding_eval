
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from "react";

import {loginSuccess} from "../Redux/Login/action.js";

import {uuid} from "uuidv4";



export const Login = () => {

    const dispatch = useDispatch();
    const {store} = useSelector((store) => store);
    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");






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