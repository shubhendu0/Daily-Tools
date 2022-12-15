import React from 'react';
import { Link , Outlet} from 'react-router-dom';
import './home.css';

export const Home = () => {
    
    return(
        <div className="main">
            <div className="header">
                <h1>Daily Tools</h1>
            </div>
       
            <nav className="navbar">
                <Link to="/todolist"> <h3>TODOLIST</h3> </Link>
                <Link to="/calculator"> <h3>CALCULATOR</h3> </Link>
                <Link to="/converter"> <h3>CONVERTER</h3> </Link>
                <Link to="/timer"> <h3>StopWatch</h3> </Link>
            </nav>
            <Outlet/>
        </div>
    )
}