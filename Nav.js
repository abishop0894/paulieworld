import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

import "../App.css";
const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  const [close, setClose] = useState(false);
  const [hideX, setHideX] = useState(true);
  const [color, setColor] = useState("black");
  const [two, setTwo] = useState("black");
  const [three, setThree] = useState("black");
  const [four, setFour] = useState("black");
  const hide = async () => {
    setHidden(true);
    setClose(true);
    setHideX(false);
  };

  const gone = () => {
    setClose(false);
    setHideX(true);
    setTimeout(() => {
      setHidden(false);
    }, 310);
  };
  return (
    <div className="outerLayer">
      <div className="layerOne">
        <div className="topSection">
          <Navbar
            key={"xxl"}
            bg="light"
            expand={"xxl"}
            className="mb-3"
            style={{ background: "transparent" }}
          >
            <Container fluid>
              <Navbar.Brand href="#">
                <img
                  src="https://paulieworld.s3.amazonaws.com/png-02.png"
                  alt=""
                ></img>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-xxl`}
                style={{
                  border: "0px",
                }}
                onClick={hide}
                hidden={hidden}
              ></Navbar.Toggle>
              <Navbar.Offcanvas
                show={close}
                id="offcanvasNavbar-expand-xxl"
                aria-labelledby={"offcanvasNavbarLabel-expand-xxl"}
                placement="end"
                style={{
                  display: "flex",
                  width: "15.5rem",
                  height: "auto",
                  maxHeight: "23rem",
                  borderRadius: "0 0 0 30px",
                }}
              >
                <Offcanvas.Header>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                    <img
                      style={{ marginRight: ".2rem" }}
                      src="https://paulieworld.s3.amazonaws.com/png-02.png"
                      alt=""
                    ></img>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav
                    className="justify-content-end flex-grow-1 pe-3"
                    id="navi"
                  >
                    <Nav.Link href="#services">
                      <h4
                        className="itemOne"
                        style={{ color: color }}
                        onClick={gone}
                        onMouseEnter={() => setColor("#FFF200")}
                        onMouseLeave={() => setColor("black")}
                      >
                        Services
                      </h4>
                    </Nav.Link>
                    <Nav.Link href="#gallery">
                      <h4
                        className="itemTwo"
                        style={{ color: two }}
                        onClick={gone}
                        onMouseEnter={() => setTwo("#FFF200")}
                        onMouseLeave={() => setTwo("black")}
                      >
                        Gallery
                      </h4>
                    </Nav.Link>
                    <Nav.Link href="#reviews">
                      <h4
                        className="itemThree"
                        style={{ color: three }}
                        onClick={gone}
                        onMouseEnter={() => setThree("#FFF200")}
                        onMouseLeave={() => setThree("black")}
                      >
                        Reviews
                      </h4>
                    </Nav.Link>
                    <Nav.Link href="#contact">
                      <h4
                        className="itemFour"
                        style={{ color: four }}
                        onClick={gone}
                        onMouseEnter={() => setFour("#FFF200")}
                        onMouseLeave={() => setFour("black")}
                      >
                        Contact
                      </h4>
                    </Nav.Link>
                    <center>
                      <CloseIcon
                        hidden={hideX}
                        onClick={gone}
                        style={{ cursor: "pointer" }}
                      ></CloseIcon>
                    </center>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          <center>
            <div className="image">
              <Container sm>
                <figure>
                  <img
                    style={{ marginRight: "4rem" }}
                    src="https://paulieworld.s3.amazonaws.com/png-01+(1).png"
                    alt=""
                  ></img>
                  <figcaption style={{ color: "black" }}>
                    Since 2015 | 732-735-0838
                  </figcaption>
                </figure>
              </Container>
              <Button
                variant="contained"
                href="#contact"
                style={{
                  backgroundColor: "black",
                  marginTop: "1rem",
                  height: "3rem",
                }}
              >
                <p4>Get a Free Quote Today!</p4>
              </Button>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
