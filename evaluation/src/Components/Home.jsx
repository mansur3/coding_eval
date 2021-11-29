import {Redirect} from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect, useContext} from "react";
import {provider} from "../Context/Context.js";
import {Link} from "react-router-dom";




export const Home = () => {

    const {event, movie, play} = useContext(provider);



    const dispatch = useDispatch();
    const {isAuth, token} = useSelector((store) => store);







    if(!isAuth) {
        return (
            <Redirect to = "/login" />
        )
    }



    return (
        <div style = {{width: "100%", display: "grid", gridTemplateColumns: "33% 33% 33%", gridGap : "10px"}}>
            <div  className = "movieContainer">
            <h2>Movies</h2>
                {
                    movie.map((e) => (
                        <div style = {{boxShadow: "0px 0px 2px 3px orange"}} key = {e.id}>
                            <div>
                                <img src = {e.image} alt = "image" />

                            </div>
                            <div>
                            <h2>Title : {e.title}</h2>
                            <h3>Rating : {e.rating} </h3>
                            </div>
                            <hr />
                            <Link to = {`/movie/${e.id}`}>SEE Details</Link>
                        </div>
                    ))
                }
            </div>
            <div className = "eventContainer">
                <h2>EVENT</h2>
                {
                    event.map((e) => (
                        <div style = {{boxShadow: "0px 0px 2px 3px orange"}} key = {e.id}>
                        <div>
                            <img src = {e.image} alt = "image" />

                        </div>
                        <div>
                        <h2>Title : {e.title}</h2>
                        {/* <h3>Rating : {e.rating} </h3> */}
                        </div>

                           <hr />
                            <Link to = {`/event/${e.id}`}>SEE Details</Link>

                        </div>
                    ))
                }
            </div>
            <div className = "playContainer">
                <h2>PLAY</h2>
                {
                    play.map((e) => (
                        <div style = {{boxShadow: "0px 0px 2px 3px orange"}} key = {e.id}>
                        <div>
                            <img src = {e.image} alt = "image" />

                        </div>
                        <div>
                        <h2>Title : {e.title}</h2>
                        {/* <h3>Rating : {e.rating} </h3> */}
                        </div>
                           <hr />
                            <Link to = {`/play/${e.id}`}>SEE Details</Link>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}