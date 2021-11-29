import {createContext, useState, useEffect} from "react";

import axios from "axios";

export const provider = createContext();


export const ContextProvider = ({children}) => {

    const [event, setEvent] = useState([]);
    const [movie, setMovie] = useState([]);
    const [play, setPlay] = useState([])
    const [id, setId] = useState("")
    const [booked, setBooked] = useState([])

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
    const bookeda = async () => {
        const {data} = await axios.get("http://localhost:3001/books")
        setBooked(data);
    }
    const handleId = (d) => {
        setId(d);
    }

    useEffect(() => {
        getEvent()
        getMovie();
        getPlay();
        bookeda();
    }, [])

    return (
        <provider.Provider  value = {{event, movie, play, handleId, id, booked}}>
            {children}
        </provider.Provider>
    )
    
}