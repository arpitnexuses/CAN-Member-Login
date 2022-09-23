import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { useHistory } from "react-router-dom";
import "./Header.css"
function Header({ setSearch }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // const roles = userInfo.role;
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {}, [userInfo]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="Navbar">
      <Container className="navcon">
        <Navbar.Brand href="/"><img src="https://i.postimg.cc/7hMvbB8Y/Frame-2.png"   width="120"  
        height="40"  /></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {/* {userInfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )} */}
            <h1> </h1>
          </Nav>
          <Nav className="navcon">
             
              {userInfo ? (
              <>
               { userInfo.role === 'admin' && (<Nav.Link href="/protect" className="login">Admin</Nav.Link>)}
               { userInfo.role === "admin" && (<Nav.Link href="/onboard" className="login">Onboard</Nav.Link>)}
               { userInfo.role === "onboard" && (<Nav.Link href="/onboard" className="login">Onboard</Nav.Link>)}
               { userInfo.role === "manager" && (<Nav.Link href="/onboard" className="login">Onboard</Nav.Link>)}
               { userInfo.role === "partner" && (<Nav.Link href="/onboard" className="login">Onboard</Nav.Link>)}
               { userInfo.role === "admin" && (<Nav.Link href="/manager" className="login">Manager</Nav.Link>)}
               { userInfo.role === "manager" && (<Nav.Link href="/manager" className="login">Manager</Nav.Link>)}
               { userInfo.role === "admin" && (<Nav.Link href="/partner" className="login">Partner</Nav.Link>)}
               { userInfo.role === "partner" && (<Nav.Link href="/partner" className="login">Partner</Nav.Link>)}
               { userInfo.role === "manager" && (<Nav.Link href="/partner" className="login">Partner</Nav.Link>)}
                <Nav.Link href="/dashboard" className="login">Dashboard</Nav.Link>
                <Nav.Link href="/quotegenerator" className="login">Quote Generator</Nav.Link>
                <Nav.Link href="/profile" className="login">Profile</Nav.Link>
                <Button className="btn" onClick={logoutHandler} variant="danger">Logout</Button>
                <Nav
                >
                  {/* <NavDropdown.Item href="/profile"> */}
                    {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                    {/* My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item> */}
                </Nav>
              </>
            ) : (
              <Nav.Link href="/login" className="login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
