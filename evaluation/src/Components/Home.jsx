import {Redirect} from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from "react";





export const Home = () => {

   



    const dispatch = useDispatch();
    const {isAuth, token} = useSelector((store) => store);







    if(!isAuth) {
        return (
            <Redirect to = "/login" />
        )
    }



    return (
        <div>This is the home page</div>
    )
}