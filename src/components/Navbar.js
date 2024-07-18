import React, {useState} from 'react'
import Logo from '../assets/margherita.jpg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return ( 
    <div className = 'navbar' >
        <div className = 'leftside' id={openLinks ? 'open' : 'close'}>;
         {/*<img src = { Logo } alt="Logo"/>*/}</div>
         <h1>PIZZA RISE</h1>
        <div className='hiddenLinks'>
        <Link to = "/" > Home </Link> 
        <Link to = "/menu" > Menu </Link> 
        <Link to = "/about" > About </Link> 
        <Link to = "/contact" > Contact </Link> 
        
         </div>
        <div className = 'righttside' > 
        <Link to = "/" > Home </Link> 
        <Link to = "/menu" > Menu </Link> 
        <Link to = "/about" > About </Link> 
        <Link to = "/contact" > Contact </Link> 
        <button onClick={toggleNavbar}>
        <ReorderIcon/>
        </button>
        </div>
    </div>
    )
}

export default Navbar