import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
function Signup(props){
    const navigate = useNavigate();
    console.log("props",props);
    return(
    <div>
        <h3>Sign up</h3>
        <div>
    
            <p>Username</p>
            <input className="form-control w-100"
            type="text"
            placeholder="lnwza007@gmail.com"
            value={props.email}
            autoFocus
            required
            onChange= {(e) => props.handleEmail(e)}
    />
        </div>

        <div>
    
            <p>Password</p>
            <input
             className="form-control w-100"
            type="password"
            placeholder="lnwza6330200335"
            value={props.password}
            autoFocus
            required
            onChange= {(e) => props.handlePassword(e)}
    />
        </div>
        <div>
            <button className="btn btn-primary mt-2 w-100"
             onClick={()=> props.handleSignup()}>Sign up</button>
            <div className="d-flex align-items-center justify-content-center">
                <p className="text-center mt-3 mr-1">Have an account?</p>
                <button className="btn btn-link px-0" 
                onClick={() => navigate ("/sign-in")}>Sign in</button>
            </div>
        </div>
    </div>
    
    );
}
export default Signup;