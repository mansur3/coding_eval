import {createContext, useState, useEffect} from "react";

import axios from "axios";

export const provider = createContext();


export const ContextProvider = ({children}) => {

    const [event, setEvent] = useState([]);
    const [movie, setMovie] = useState([]);
    const [play, setPlay] = useState([])

    const getEvent = async () => {
        let {data} = await axios.get("http://localhost:3001/events");
        setEvent(data);
    }
    const getMovie = async () => {
        let {data} = await axios.get("http://localhost:3001/movies");
        setMovie(data);
    }
    const getPlay = async () => {
        const {data} = await axios.get("http://localhost:3001/plays");
        setPlay(data);
    }

    useEffect(() => {
        getEvent()
        getMovie();
        getPlay();
    }, [])

    return (
        <provider.Provider  value = {{event, movie, play}}>
            {children}
        </provider.Provider>
    )
    
}