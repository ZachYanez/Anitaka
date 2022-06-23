import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Videos() {
  return (
    <div className="background">
      <Navbar className="header" collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="#/">Anitaka</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Bio">Bio</Nav.Link>
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
              <NavDropdown.Item target="_blank" href="https://www.facebook.com/anitaka.knight">
                Facebook
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Headshots">Headshots</Nav.Link>
            <Nav.Link href="#printwork">Print Work</Nav.Link>
            <Nav.Link href="#Kayden">Kayden</Nav.Link>
            <Nav.Link href="#Lifestyle">Lifestyle</Nav.Link>
            <Nav.Link className="staticLink" href="#Videos">
              Videos
            </Nav.Link>
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
      <div className="content-area">
        <div className="mt-3">
          {/* HEB */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cobEBhETei4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mt-3">
          {/* Canoo */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6qPBQnuUoQk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          {/* Daysy */}

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/K-Rd4Lcs4KI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-3">
          {/* Still Comes Up */}

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PXdSvHHKPyk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mt-3 mb-3">
          {/* Vivid */}

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5ddLWTIUlSQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mt-3">
          {/* Bell Filmz */}

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6Ctxs-98qZE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mt-3">
          {/* Reel */}

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/I3pWBZmQq6U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mt-3">
          {/* Voice Work */}

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yRMajp_LrZU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div className="mt-3">
            {/* Ranch Water */}

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HBQgiV-NziA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="mt-3">
            {/* ask the lawyers */}

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2FH5HbFnr8o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="mt-3">
            {/* Visit Dallas */}

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ck2gAo7Wj_g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="mt-3">
            {/* solo stove*/}

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/u_Vsra15dHg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="mt-3">
            {/* clockwise */}

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hUL4qgtjqN8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="mt-3">
            <Nav.Link href="https://youtube.com/shorts/ZFCA3wMLs5I">Urbn Fit</Nav.Link>
          </div>
          <div className="mt-3">
            <Nav.Link href="https://youtube.com/shorts/pMXNAYbiDfQ">Mobile Ad 1</Nav.Link>
          </div>
          <div className="mt-3">
            <Nav.Link href="https://youtube.com/shorts/GEoVlmhW8qM">Mobile Ad 2</Nav.Link>
          </div>
          <div className="mt-3">
            <Nav.Link href="https://youtube.com/shorts/oMLq8JhXOdc">Amazon Placement</Nav.Link>
          </div>
          <div className="mt-3">
            <Nav.Link href="https://youtube.com/shorts/9GygSYUBMjM">Eddie By Giddie</Nav.Link>
          </div>
        </div>
      </div>
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
