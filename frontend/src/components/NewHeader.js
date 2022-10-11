import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../actions/userActions";
import "./newheader.css"
function NewHeader() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    
    const logoutHandler = () => {
        dispatch(logout());
        history.push("/login");
    };

    
  return (
    <>
    	<div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
    <img id="logoss" src="https://canetwork.com/wp-content/uploads/2020/07/bfinal-logo.png" alt="..." height="36" />
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
  {userInfo ? ( <>
  {userInfo.role === 'admin' && (<a href="/protect">Admin</a>)}
  {userInfo.role === 'admin' && (<a href="/onboard">onboard</a>)}
  {userInfo.role === 'admin' && (<a href="/partner">Partner</a>)}
  {userInfo.role === 'admin' && (<a href="/dashboard">Dashboard</a>)}
  {userInfo.role === 'admin' && (<a href="/quotegenerator">Quote</a>)}
  {userInfo.role === 'admin' && (<a href="/clientlist">Quote's</a>)}
  {userInfo.role === 'admin' && (<a href="/profile">Profile</a>)}
  {userInfo.role === 'admin' && (<a href="/manager">Manager</a>)}


  {userInfo.role === 'manager' && (<a href="/protect">Admin</a>)}
  {userInfo.role === 'manager' && (<a href="/onboard">onboard</a>)}
  {userInfo.role === 'manager' && (<a href="/partner">Partner</a>)}
  {userInfo.role === 'manager' && (<a href="/dashboard">Dashboard</a>)}
  {userInfo.role === 'manager' && (<a href="/quotegenerator">Quote</a>)}
  {userInfo.role === 'manager' && (<a href="/clientlist">Quote's</a>)}
  {userInfo.role === 'manager' && (<a href="/profile">Profile</a>)}
  {userInfo.role === 'manager' && (<a href="/manager">Manager</a>)}


  
  {userInfo.role === 'partner' && (<a href="/onboard">onboard</a>)}
  {userInfo.role === 'partner' && (<a href="/partner">Partner</a>)}
  {userInfo.role === 'partner' && (<a href="/dashboard">Dashboard</a>)}
  {userInfo.role === 'partner' && (<a href="/quotegenerator">Quote</a>)}
  {userInfo.role === 'partner' && (<a href="/clientlist">Quote's</a>)}
  {userInfo.role === 'partner' && (<a href="/profile">Profile</a>)}

  {userInfo.role === 'onboard' && (<a href="/onboard">onboard</a>)}
  {userInfo.role === 'onboard' && (<a href="/dashboard">Dashboard</a>)}
  {userInfo.role === 'onboard' && (<a href="/quotegenerator">Quote</a>)}
  {userInfo.role === 'onboard' && (<a href="/profile">Profile</a>)}




  </>

  ):(<a href="/login">Login</a>)}
  

  <button id="logout" className="button-31" style={{width: "90px"}} onClick={logoutHandler} variant="danger">Logout</button> 
  </div>
</div>
    
    </>
  )
}

export default NewHeader