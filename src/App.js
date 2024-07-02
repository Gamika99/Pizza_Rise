import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return ( <
        div className = "App" >
        <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        exact component = { Home }
        element = { < Home title = "Your Custom Home Text" / > }
        /> <
        /Routes>

        <
        /Router>  <
        /div>
    );
}

export default App;