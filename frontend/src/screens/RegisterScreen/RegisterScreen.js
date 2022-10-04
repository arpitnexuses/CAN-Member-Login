import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../actions/userActions";
import "./RegisterScreen.css";

function RegisterScreen({ history }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState(
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    );
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;
  
    const postDetails = (pics) => {
      if (
        pics ===
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
      ) {
        return setPicMessage("Please Select an Image");
      }
      setPicMessage(null);
      if (pics.type === "file" || pics.type === "image/png") {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "notezipper");
        data.append("cloud_name", "piyushproj");
        fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setPic(data.url.toString());
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return setPicMessage("Please Select an Image");
      }
    };
  
    useEffect(() => {
      if (userInfo) {
        history.push("/login");
      }
    }, [history, userInfo]);
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      if (password !== confirmpassword) {
        setMessage("Passwords do not match");
      } else dispatch(register(name, email, password, pic));
    };
  

  return (
    <>
    <body className="bodystat">
        <h2 className='headers'></h2>
        <div className="containerrr" id="containerrr">

            <div className="form-containerrr sign-un-containerrr">
                <form className="formm" onSubmit={submitHandler}>
                    <img className="logocs" src="https://canetwork.com/wp-content/uploads/2020/07/bfinal-logo.png" width="200"
                        height="55" />
                    <h1 className='signinheads'>Sign up</h1>

                    <span className='spann'>use your email for registration</span>
                    <input
                        type="text"
                        id="inputt"
                        placeholder="Full Name"
                        className='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <input
                        type="email"
                        id="inputt"
                        placeholder="Email"
                        className='emails'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input
                        type="password"
                        id="inputt"
                        className='emails'
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                    <input
                        type="password"
                        id="inputt"
                        className='emails'
                        placeholder="Confirm Password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    
                    <input
                        type="file"
                        id="inputt"
                        placeholder="Profile Picture"
                        className='emails'
                        
                        onChange={(e) => postDetails(e.target.value)} />


                    <div className='btn'>
                        <button className="button" onClick={submitHandler}>Sign Up</button> 
                    </div>
                </form>
            </div>
            <div className="overlay-containerrr">
                <div className="overlay">

                    <div class="overlay-panel overlay-right">
                        <h1 className='signinhead'>Welcome back!</h1>
                        <p className='sideleftpara'>To keep connected with us please login with personal info</p>
                        <Link to="/login"><button id="side" className="button">Sign In</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </body>
</>
  )
}

export default RegisterScreen;