import React from "react";
import KnowPics from "../components/carousels/knowPics";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Know1 from "../assets/know/Amazon.PNG";
// import Know2 from "../assets/know/Dynamax.PNG";
// import Know3 from "../assets/know/Fogo.PNG";
import Headshot6 from "../assets/headshots/headshot6.jpg";

export default function Bio() {
  return (
    <div className="background">
      <Navbar className="header" collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="#/">Anitaka</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="staticLink" href="#Bio">
              Bio
            </Nav.Link>
            <NavDropdown title="My Links" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://www.tagtalentagency.com/Talent/Anitaka-Knight">
                TAG
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="http://www.brownagency.co/commercial/women/1494-anitaka-knight/">
                Brown Agency
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/anitakaaaa/">
                Instagram Main
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/anitakatheactress/">
                Instagram Actress Account
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/anitakaknight/">
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="facebook.com/anitaka.knight">
                Facebook
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Headshots">Headshots</Nav.Link>
            <Nav.Link href="#printwork">Print Work</Nav.Link>
            <Nav.Link href="#Kayden">Kayden</Nav.Link>
            <Nav.Link href="#Lifestyle">Lifestyle</Nav.Link>
            <Nav.Link href="#Videos">Videos</Nav.Link>
            <NavDropdown title="Resume" id="collasible-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://drive.google.com/file/d/16YpoI9VQ2tLJW3lAoBLLGbLVK6txCpHT/view?usp=sharing"
              >
                Acting Resume
              </NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="#Videos">Videos</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="mailto:nitaka828@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content-area background">
        <br />
        <div className="textColorWhite ml-5 mr-5 ">
          Anitaka was born in Germany. Both of her parents are military. Anitaka's childhood involved plenty of structure and
          organization. She played collegiate volleyball on scholarship in Florida. Anitaka uses her competitive nature to seek
          after challenging roles that require her to think outside of the box.
          <p />
          Most recently Anitaka has been in several commercials to include, NBC, Karbach, Aspen Dental, Twin Liquors, and Ford
          just to name a few.
          <p />
          She currently studies Meisner and Scene Study at In The Moment Acting Studio with Laurel Vouvray in Austin, TX.
          <p />
          Anitaka enjoys playing sports, reading, and traveling during her spare time.
          <div />
          <p />
        </div>

        <div>
          <img className="w-50 shadow" src={Headshot6} alt="slide" />
          <br />
        </div>
      </div>
      <br />

      <div className="extra-content"></div>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="#/">A</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:nitaka828@yahoo.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
