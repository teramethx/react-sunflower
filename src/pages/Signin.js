import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Signin(props){
    return(

    <div>
        <h3>Sign in</h3>
        <div>
    
            <p>Username</p>
            <input className="form-control w-100"
            type="text"
            placeholder="lnwza007@gmail.com"
            autoFocus
            required
            value={props.email}
            onChange={(e) => props.handleEmail(e)}

    />
        </div>

        <div>
    
            <p>Password</p>
            <input
             className="form-control w-100"
            type="password"
            placeholder="lnwza6330200335"
            autoFocus
            required
            value={props.password}
            onChange={(e) => props.handlePassword(e)}

    />
        </div>
        <div>
            <button className="btn btn-primary mt-2 w-100"
            onClick={()=> props.handleSignin()}
            >Sign in</button>
            <div className="d-flex align-items-center justify-content-center">
                <p className="text-center mt-3 mr-1">Forgot Password?</p>
                    &nbsp;
                <button 
                    type= "button"
                    className="btn btn-link px-0"
                    onClick={()=> props.setHasAccount(!props.hasAccount)}
                    >
                    Change Password</button>
            </div>
        </div>
    </div>
    );


}
export default Signin;