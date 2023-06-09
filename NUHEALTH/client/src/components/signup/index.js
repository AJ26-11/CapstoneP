import React from "react";
import SignUp from "./Signup.module.css"

function Signup(){
    return(
        <div className={SignUp.loginContainer}>
            <div className={SignUp.loginContainerv2}>
            <h1>Create your Account</h1>

            <div className={SignUp.inputContainer}>
                <label>FIRST NAME</label>
                <input placeholder="enter your first name" type="text"/>
            </div>

            <div className={SignUp.inputContainer}>
                <label>LAST NAME</label>
                <input placeholder="enter your last name" type="text"/>
            </div>

            <div className={SignUp.inputContainer}>
                <label>EMAIL</label>
                <input placeholder="enter your email" type="email"/>
            </div>

            <div className={SignUp.inputContainer}>
                <label>PASSWORD</label>
                <input placeholder="enter your password" type="password"/>
            </div>

            <div className={SignUp.inputContainer}>
                <label>CONFIRM PASSWORD</label>
                <input placeholder="retype your password" type="password"/>
            </div>


            <button className={SignUp.loginBTN}>REGISTER</button>
             <span className={SignUp.or}>or</span>
             <button className={SignUp.googleBTN}>
             <i class="fa-brands fa-google"></i> Sign up with google</button>
            </div>
            
           
        </div>
    )

}

export default Signup;