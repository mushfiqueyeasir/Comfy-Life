import React from 'react';
import logo from '../../resource/logo.png'
import { Link } from 'react-router-dom';
import './Header.css';
import CustomLink from '../../hooks/CustomLink';

const Header = () => {
    return (
        <header className='bg-dark'>
            <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className='d-flex justify-content-evenly align-items-center'>
                        <Link to="/"> <img src={logo} className="img-fluid w-26 imgg" /></Link>
                        <button className="navbar-toggler p-1 h-25" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </div>





                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <CustomLink id='home' className="nav-link" to="/home">HOME</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink id='products' className="nav-link " to="/products" >PRODUCTS</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink id='reviews' className="nav-link " to="/reviews">REVIEWS</CustomLink>
                            </li>



                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;