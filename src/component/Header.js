
import React from "react";
import logo from "../assets/sunflowerb.png";
function Header(){
    return(

        <nav className ="navbar navbar-expand-lg n navbar-light bg-light ">
            <div className="container-fluid">
                <img src={logo} alt="logo" width="10%"/>
                    <button class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                     aria-controls="navbarNav" 
                     aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div className="navbar-nav">
            <a className="nav-link active" href="/">
                Home 
            </a>
            <a className="nav-link active" href="/sign-up">
                Sign up 
            </a>
            <a className="nav-link active" href="/sign-in">
                Sign in 
            </a>
            <a className="nav-link active" href="/profile">
                Profile 
            </a>
        </div>

    </div>
            </div>
        </nav>
    )
    
}

export default Header;