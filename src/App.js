import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return ( 
    <div className = "App" >
        <Router>
        <Navbar/>
        <Routes>
        <Route path = "/" exact component = { Home } element={<Home title="Your Custom Home Text"/>} />
        <Route path = "/menu" exact component = { Menu } element={<Menu title="Your Custom Menu Text"/>} />
        <Route path = "/about" exact component = { About } element={<About title="Your Custom Menu Text"/>} />
        <Route path = "/contact" exact component = { Contact } element={<Contact title="Your Custom Menu Text"/>} />        
        </Routes>
        <Footer/>

        </Router> 
        </div>
    );
}

export default App;