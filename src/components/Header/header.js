import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import LanguageSelector from "../languageDetector";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isTop, setIsTop] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const activePage = window.location.pathname;
    if (activePage == "/contact-us") {
      setCurrentPage("contact-us");
    } else if (activePage == "/about") {
      setCurrentPage("about");
    } else if (activePage == "/service") {
      setCurrentPage("service");
    } else if (activePage == "/prices") {
      setCurrentPage("prices");
    } else {
      setCurrentPage("home");
    }
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  //   console.log(window.scrollY)
  //   setIsTop(window.scrollY === 0);
  // };

  // window.addEventListener('scroll', handleScroll);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Navbar
      className={!isTop ? "bg-[rgba(0,0,0,0.5)]" : "!bg-white"}
      expand="md"
      variant={!isTop ? "dark" : "light"}
      fixed="top"
    >
      {/* <p>{isTop}</p> */}
      <Container>
        {/* Logo and name */}

        <Navbar.Brand href="/">
          <img
            src={`${
              isTop
                ? "/images/legalmoto-logo-2.png"
                : "/images/legalmoto-logo.png"
            }`}
            alt="Logo"
            className="mr-2"
          />
        </Navbar.Brand>
        {/* Hamburger menu icon */}
        <Navbar.Toggle
          className={`${!isTop ? "border-white" : "border-black"} w-fit`}
          aria-controls="responsive-navbar-nav"
          onClick={toggleMenu}
        >
          <FiMenu color={`${!isTop ? "white" : "black"}`} />
        </Navbar.Toggle>

        {/* Pages */}
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`${showMenu ? "show !bg-[rgba(0,0,0,1)] " : ""}`}
        >
          <Nav
            className={
              !isTop
                ? "ml-auto text-white !items-center"
                : "ml-auto text-black !items-center"
            }
          >
            <Nav.Link
              className={`!font-bold !border-3 !border-red-600  ${
                showMenu
                  ? "show !text-white "
                  : !isTop
                  ? "text-white"
                  : "text-black"
              } ml-1  `}
              style={
                currentPage == "home" ? { borderBottom: "1px solid red" } : {}
              }
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`!font-bold ${
                showMenu
                  ? "show !text-white"
                  : !isTop
                  ? "text-white"
                  : "text-black"
              }  ml-1 `}
              href="/about"
              style={
                currentPage == "about" ? { borderBottom: "1px solid red" } : {}
              }
            >
              About
            </Nav.Link>
            <Nav.Link
              className={`!font-bold ${
                showMenu
                  ? "show !text-white"
                  : !isTop
                  ? "text-white"
                  : "text-black"
              } ml-1  `}
              href="/service"
              style={
                currentPage == "service"
                  ? { borderBottom: "1px solid red" }
                  : {}
              }
            >
              Service
            </Nav.Link>
            <Nav.Link
              className={`!font-bold ${
                showMenu
                  ? "show !text-white"
                  : !isTop
                  ? "text-white"
                  : "text-black"
              } ml-1  `}
              href="/prices"
              style={
                currentPage == "prices" ? { borderBottom: "1px solid red" } : {}
              }
            >
              Corporate Advocate
            </Nav.Link>
            <Nav.Link
              className={`!font-bold ${
                showMenu
                  ? "show !text-white"
                  : !isTop
                  ? "text-white"
                  : "text-black"
              } ml-1  `}
              href="/contact-us"
              style={
                currentPage == "contact-us"
                  ? { borderBottom: "1px solid red" }
                  : {}
              }
            >
              Contact us
            </Nav.Link>
            <Nav.Link
              className={`!font-bold headerPhone ${
                showMenu
                  ? "show !text-white"
                  : !isTop
                  ? "text-white"
                  : "text-black"
              } p-0 ml-1 !shadow-[0,35px,60px,-15px,rgba(250,250,0,1)] `}
              href="tel:+60194260687"
            >
              <div
                className="flex items-center  shadow-red-300 !bg-red-600"
                style={{
                  boxShadow:
                    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                }}
              >
                <FaPhone className="mr-1 ml-2" size={15} color="white" />{" "}
                <p className="!m-0 p-1 !text-white">+60 194260687 </p>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div
        className="!top-0 absolute sm:relative w-full sm:w-auto  !flex !justify-end  !mr-5"
        style={{ overflowX: "hidden", float: "right" }}
      >
        <LanguageSelector />



      </div>

    </Navbar>
  );
};

export default NavBar;
