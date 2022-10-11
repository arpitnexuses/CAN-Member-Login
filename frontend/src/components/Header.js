import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../actions/userActions";
import { Button } from "react-bootstrap";
import "./Screen.css"
const MainNav = () => {
 
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    


    return (
        <>

        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>

        <Nav className="mr-auto" id="links">
            {userInfo ? (
                <>
               
        
                    {userInfo.role === 'admin' && (<Nav.Link
                        as={RouterNavLink}
                        to="/protect"
                        exact
                        activeClassName="router-link-exact-active"
                        id="links"
                    >
                        Admin
                    </Nav.Link>)}
                    {userInfo.role === "admin" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/onboard"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Onboard
                        </Nav.Link>)}
                    {userInfo.role === "manager" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/onboard"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Onboard
                        </Nav.Link>)}
                    {userInfo.role === "onboard" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/onboard"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Onboard
                        </Nav.Link>)}
                    {userInfo.role === "partner" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/onboard"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Onboard
                        </Nav.Link>)}
                    {userInfo.role === "admin" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/manager"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Manager
                        </Nav.Link>)}
                    {userInfo.role === "manager" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/manager"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Manager
                        </Nav.Link>)}
                    {userInfo.role === "admin" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/partner"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Partner
                        </Nav.Link>)}
                    {userInfo.role === "manager" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/partner"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Partner
                        </Nav.Link>)}
                    {userInfo.role === "partner" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/partner"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Partner
                        </Nav.Link>)}
                        {userInfo.role === "partner" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/clientlist"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Quotes
                        </Nav.Link>)}
                        {userInfo.role === "admin" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/clientlist"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Quotes
                        </Nav.Link>)}
                        {userInfo.role === "manager" && (
                        <Nav.Link
                            as={RouterNavLink}
                            to="/clientlist"
                            exact
                            activeClassName="router-link-exact-active"
                            id="links"
                        >
                            Quotes
                        </Nav.Link>)}
                        
                </>
            ) : (<Nav.Link href="/login" className="login">Login</Nav.Link>)}


            <Nav.Link
                as={RouterNavLink}
                to="/dashboard"
                exact
                id="links"
                activeClassName="router-link-exact-active"
            >
                Dashboard
            </Nav.Link>
            <Nav.Link
                as={RouterNavLink}
                to="/quotegenerator"
                exact
                id="links"
                activeClassName="router-link-exact-active"
            >
                Quote
            </Nav.Link>
             <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                id="links"
                activeClassName="router-link-exact-active"
            >
                Profile
            </Nav.Link>
        </Nav>
        </>
    )
};

const AuthNav = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const logoutHandler = () => {
        dispatch(logout());
        history.push("/login");
    };
    return (
        <Nav className="justify-content-end">
            {userInfo ? <Button className="button-50" onClick={logoutHandler} variant="danger">Logout</Button> : <Nav.Link href="/login" className="login">Login</Nav.Link>}
        </Nav>
    )
  
}

function Header()  {
    return (
      <Navbar bg="light" expand="md" id="nav">
        <Container>
          <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
          <a className="navbar-brand" href="#">
        <img id="logos" src="https://canetwork.com/wp-content/uploads/2020/07/bfinal-logo.png" alt="..." height="36" />
      </a>
          <MainNav />
          <AuthNav />
        </Container>
      </Navbar>
    );
  };

  export default Header;