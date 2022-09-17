import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css"
const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        background: "#158cba",
        height: "78px",
        marginTop: "-20px"
      }}
    >
      <Container className="cont">
        <Row>
          <Col className="text-center py-3 copy">Copyright &copy; Nexuses</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
