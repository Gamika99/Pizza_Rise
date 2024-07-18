import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
    return ( <
        div className = "footer" >
        <
        div className = "socialMedia" >
        <
        InstagramIcon / >
        <
        FacebookIcon / >
        <
        YouTubeIcon / >
        <
        TwitterIcon / >
        <
        LinkedInIcon / >
        <
        /div> <
        p > & copy; 2024 pizza_rise < /p> <
        /div>
    );
}

export default Footer;