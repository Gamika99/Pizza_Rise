import React from "react";
import MultiplePizzas from "../assets/margherita.jpg";
import "../styles/About.css";

function About() {
    return ( <
        div className = "about" >
        <
        div className = "aboutTop"
        style = {
            { backgroundImage: `url(${MultiplePizzas})` } } >
        < /div> <
        div className = "aboutBottom" >
        <
        h1 > ABOUT US < /h1> <
        p >
        Welcome to Pizza Rise, where every slice tells a story of passion, flavor, and tradition.Our journey began with a simple yet profound love
        for pizza, driven by a commitment to bring the most authentic and delicious pizzas to our community.At Pizza Rise, we believe that great pizza starts with great ingredients.From the freshest vegetables to the finest cheeses and meats, we source only the best
        for our pizzas.Our dough is handmade daily, and our sauces are crafted from family recipes passed down through generations. <
        /p>

        <
        p > Whether you crave a classic Margherita, a hearty Meat Lover’ s, or a unique creation of your own, we have something to satisfy every pizza lover.Each pizza is carefully prepared and baked to perfection, ensuring a crisp, flavorful crust and a delectable combination of toppings.Our mission is to rise above the ordinary and deliver an extraordinary pizza experience.We aim to create a warm and welcoming atmosphere where families and friends can come together to enjoy great food and great company. <
        /p>


        <
        /div> <
        /div>
    );
}

export default About;