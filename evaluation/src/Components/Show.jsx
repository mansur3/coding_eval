import {useParams, Redirect, useHistory, Link} from "react-router-dom";

import {useState, useEffect, useContext} from "react";
import axios from "axios";
import {provider} from "../Context/Context.js";




export const Show = () => {
    const {id, movie} = useParams();
    const [dataa, setData] = useState({})
    const history = useHistory();
    const [isBook, setIsBook] = useState(false)
    const {handleId} = useContext(provider);


    const getData = async () => {
        if(movie === "movie") {
         const {data} = await axios.get(`http://localhost:3001/movies/${id}`)
        setData(data)


        } else if (movie === "event") {
         const {data} = await axios.get(`http://localhost:3001/events/${id}`)
        setData(data);


        } else if ( movie === "play") {
         const {data} = await axios.get(`http://localhost:3001/events/${id}`)
        setData(data);


        }

    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
        <div>
            <button >Go back</button>
        </div>
        <hr />
            <div>
                <img src = {dataa.image} alt = "mage" />
            </div>
            <div>
                <h2>Title : {dataa.title}</h2>
                <p>DATE : {dataa.date} </p>
                <p>AUThor : {dataa.author}</p>
                <p>Description: {dataa.desc}</p>
            </div>
            <div>
                <button onClick = {() => handleId(dataa.id)}><Link to = {`/ask`}>Boook</Link></button>
            </div>


        </div>
    )
}

