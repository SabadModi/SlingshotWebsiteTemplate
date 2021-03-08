import React from 'react';
import './Header.css';
// import Menu from '@material-ui/icons'

function Header() {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css" integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY=" crossorigin="anonymous" />
            <nav className="flex items-center p-3 flex-wrap">
                <a href="#" className="p-2 mr-4 inline-flex items-center">
                    <img src="logo.png"></img>
                </a>
                <button
                    className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
                    data-target="#navigation"
                >
                    <i className="material-icons">menu</i>
                </button>
                <div
                    className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                    id="navigation"
                >
                    <div
                        className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
                    >
                        <a
                            href="#"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-white hover:text-black"
                        >
                            <span>Home</span>
                        </a>
                        <a
                            href="#"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-white hover:text-black"
                        >
                            <span>About</span>
                        </a>
                        
                        <a
                            href="#"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-white hover:text-black"
                        >
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
