import React from "react";
import LoginStyles from "./Login.module.css";
import { Link,useNavigate } from "react-router-dom";

function Login(){
    return(
        <div className={LoginStyles.loginContainer}>
            <div className={LoginStyles.loginContainerv2}>
            <h1>Welcome Back!</h1>

            <div className={LoginStyles.inputContainer}>
                <label>EMAIL</label>
                <input placeholder="enter your email" type="email"/>
            </div>

            <div className={LoginStyles.inputContainer}>
                <label>PASSWORD</label>
                <input placeholder="enter your password" type="password"/>
            </div>

            

            <button className={LoginStyles.loginBTN}>LOGIN</button>
            <span className={LoginStyles.or}>or</span>
             <button className={LoginStyles.googleBTN}>
                <i class="fa-brands fa-google"></i> Sign in with google</button>
                <span className={LoginStyles.notreg}>Not registered yet? <Link className={LoginStyles.signupBTN}to="/account/signup">Signup</Link></span>
             
            
            
            </div>
            
           
        </div>
    )

}

export default Login;