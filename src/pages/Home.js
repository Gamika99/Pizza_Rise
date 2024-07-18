import React from 'react'
import MultiplePizzas from "../assets/margherita.jpg";
import { Link } from "react-router-dom";
import '../styles/Home.css';

function Home() {
    return ( <
        div className = 'home'
        style = {
            { backgroundImage: `url(${MultiplePizzas})` } } >
        <
        div className = 'headercontainer' >
        <
        h1 > Pizza Rise < /h1> <
        p > Taste The Delicious PIZZA < /p> <
        Link to = "/menu" >
        <
        button > ORDER IT < /button> <
        /Link> <
        /div> <
        /div>
    )

}

export default Home;