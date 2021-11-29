import {useParams, Redirect, useHistory, Link} from "react-router-dom";

import {useState, useEffect, useContext} from "react";
import axios from "axios";
import {provider} from "../Context/Context.js";


export const Confirm = () => {

    // const {id} = useParams();
    const {id} = useContext(provider);

    
       const handleClick = async () => {
            const {data} = await axios.get(`http://localhost:3001/movies/${id}`)

            await axios.post("http://localhost:3001/books", data);
        //    return  <Redirect to = "/" />
       }

    return (
        <div>
              <input type = "date" placeholder = "Enter the date" />
              <button  onClick = {handleClick}>Book </button>
            </div>
    )
} 