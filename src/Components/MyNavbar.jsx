import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Styles.css";
import { Button, Stack } from "react-bootstrap";
import { Link } from "react-scroll";

export const MyNavbar = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const handleOffcanvasOpen = () => {
    setOffcanvasOpen(true);
  };

  const handleOffcanvasClose = () => {
    setOffcanvasOpen(false);
  };

  const onButtonClick = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1GT_S42XE6axK8DBCPhJ4xYdHA0IbAp5U/view?usp=sharing";

    const openPDFInNewTab = () => {
      window.open(pdfUrl);
    };

    const downloadPDF = () => {
      fetch(pdfUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "Adnan-Baig-Resume.pdf"; // Specify the desired file name here
          link.style.display = "none";

          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error downloading PDF:", error);
        });
    };

    openPDFInNewTab();
    downloadPDF();
  };

  return (
    <>
      <Navbar
        expand={"md"}
        id="nav-menu"
        style={{ backgroundColor: "black" }}
        className="nav align-items-center fixed-top pt-3"
      >
        <Container>
          <Navbar.Toggle
            onClick={handleOffcanvasOpen}
            aria-controls={`offcanvasNavbar-expand-md`}
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            show={offcanvasOpen}
            onHide={handleOffcanvasClose}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body style={{ background: "black" }}>
              <Nav className="d-flex justify-content-around flex-grow-1 pe-3">
                {offcanvasOpen ? (
                  <>
                    <Stack>
                      <Link
                        to="home"
                        className="nav-link home"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}
                        id="home"
                      >
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content"
                              hidden-slot-text="HOME"
                            >
                              HOME
                            </span>
                          </span>
                        </p>
                      </Link>
                      <Link
                        to="about"
                        id="about-me"
                        className="nav-link about"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}
                      >
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content"
                              hidden-slot-text="ABOUT ME"
                            >
                              ABOUT ME
                            </span>
                          </span>
                        </p>
                      </Link>
                      <Link to="skills"
                      className="nav-link skills"
                        id="my-skills"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}>
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content"
                              hidden-slot-text="SKILLS"
                            >
                              SKILLS
                            </span>
                          </span>
                        </p>
                      </Link>
                    </Stack>
                    <Stack>
                      <Link to="home"
                      className="nav-link home"
                        id="user-detail-name"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}>
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content brand"
                              hidden-slot-text="ADNAN BAIG"
                            >
                              I AM ADNAN
                            </span>
                          </span>
                        </p>
                      </Link>
                    </Stack>
                    <Stack>
                      <Link to="projects"
                      className="nav-link projects"
                        id="my-projects"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}>
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content"
                              hidden-slot-text="PROJECTS"
                            >
                              PROJECTS
                            </span>
                          </span>
                        </p>
                      </Link>
                      <Link to="contact"
                      className="nav-link contact"
                        id="contact-me"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}>
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content"
                              hidden-slot-text="CONTACT"
                            >
                              CONTACT
                            </span>
                          </span>
                        </p>
                      </Link>
                      <Button
                        onClick={onButtonClick}
                        className="btn1 p-0 text-start resume-button-1"
                      >
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              style={{ background: "red", padding: "5px" }}
                              className="slot-content"
                              hidden-slot-text="RESUME"
                            >
                              RESUME
                            </span>
                          </span>
                        </p>
                      </Button>
                    </Stack>
                  </>
                ) : (
                  <>
                    <Stack direction="horizontal" gap={2}>
                      <Link
                        to="home"
                        className="nav-link home"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}
                      >
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content"
                              hidden-slot-text="HOME"
                            >
                              HOME
                            </span>
                          </span>
                        </p>
                      </Link>
                      <Link
                        to="about"
                        id="about-me"
                        className="nav-link about"
                        spy={true}
                        smooth={true}
                        offset={-260}
                        duration={500}
                      >
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content"
                              hidden-slot-text="ABOUT ME"
                            >
                              ABOUT ME
                            </span>
                          </span>
                        </p>
                      </Link>
                      <Link
                        to="skills"
                        className="nav-link skills"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                      >
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content"
                              hidden-slot-text="SKILLS"
                            >
                              SKILLS
                            </span>
                          </span>
                        </p>
                      </Link>
                    </Stack>
                    <Stack style={{ textAlign: "center" }}>
                      <Link
                        to="home"
                        className="nav-link home"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}
                      >
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content brand"
                              hidden-slot-text="I AM ADNAN BAIG"
                            >
                              I AM ADNAN BAIG
                            </span>
                          </span>
                        </p>
                      </Link>
                    </Stack>
                    <Stack direction="horizontal" gap={2}>
                      <Link
                        to="projects"
                        className="nav-link projects"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}
                      >
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content"
                              hidden-slot-text="PROJECTS"
                            >
                              PROJECTS
                            </span>
                          </span>
                        </p>
                      </Link>
                      <Link
                        to="contact"
                        className="nav-link contact"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                      >
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              className="slot-content"
                              hidden-slot-text="CONTACT"
                            >
                              CONTACT
                            </span>
                          </span>
                        </p>
                      </Link>
                      <Button onClick={onButtonClick} bsPrefix="btn1" className="resume-button-1 nav-link resume">
                        <p className="mbrt-slot-hover">
                          <span className="slot-mask">
                            <span
                              style={{ background: "red", padding: "5px" }}
                              className="slot-content"
                              hidden-slot-text="RESUME"
                            >
                              RESUME
                            </span>
                          </span>
                        </p>
                      </Button>
                    </Stack>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
