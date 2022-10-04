import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { login } from "../../actions/userActions";
import "./LoginScreen.css";
function LoginScreen({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push("/dashboard");
        }
    }, [history, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };
    return (
        <>
            <body className="bodystat">
                <h2 className='headers'></h2>
                <div className="containerrr" id="containerrr">

                    <div className="form-containerrr sign-in-containerrr">
                        <form className="formm" onSubmit={submitHandler}>
                            <img className="logoc" src="https://canetwork.com/wp-content/uploads/2020/07/bfinal-logo.png" width="200"
                                height="55" />
                            <h1 className='signinhead'>Sign in</h1>

                            <span className='spann'>using your account</span>
                            <input
                                type="email"
                                id="inputt"
                                placeholder="Email"
                                className='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                            <input
                                type="password"
                                id="inputt"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />


                            <div className='btn'>
                                <button className="button" onClick={submitHandler}>Sign In</button>
                            </div>
                        </form>
                    </div>
                    <div className="overlay-containerrr">
                        <div className="overlay">

                            <div class="overlay-panel overlay-right">
                                <h1 className='signinhead'>Hello, Members!</h1>
                                <p className='sideleftpara'>Enter your personal details and start journey with us</p>
                                <Link to="/register"><button className="button" id="side">Sign Up</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default LoginScreen