import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import '../styles/Home.css';

function Home() {
    return ( <
        div className = 'home' >
        <
        div className = 'headercontainer'
        style = {
            { backgroundImage: 'url(${BannerImage})' } } >
        <
        h1 > Pizza Rise < /h1> <
        p > Pizza to fit any taste < /p> <
        Link to = "/menu" >
        <
        button > ORDER NOW < /button> <
        /Link> <
        /div> <
        /div>
    )

}

export default Home;