import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import "./component-Styles/Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="p-2 navigationbar">
      <Container>
        <div className="col-md-4 col-sm-12 ">
          <Navbar.Brand>
            <NavLink
              style={{
                color: "blue",
              }}
              className="text-decoration-none text-reset rounded-3  Navigation active "
              to="/"
            >
              <img className="rounded-3" width={100} src={logo} alt="logo" />
            </NavLink>
          </Navbar.Brand>
        </div>
        <div className="col-md-8">
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <div className="d-flex justify-content-end mb-3">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <Nav.Link>
                  <NavLink
                    className="text-decoration-none text-reset py-2"
                    to="/"
                  >
                    <span className="fs-6  fw-bold Navigation  px-3 py-2">
                      Home
                    </span>
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    className="text-decoration-none text-reset py-2"
                    to="/resume"
                  >
                    <span className="fs-6 Navigation   fw-bold px-3 py-2 ">
                      Resume
                    </span>
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    className="text-decoration-none text-reset  py-2"
                    to="/works"
                  >
                    <span className="fs-6  fw-bold Navigation px-3 py-2 ">
                      works
                    </span>
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    className="text-decoration-none text-reset  py-2"
                    to="/contact"
                  >
                    <span className="fs-6  fw-bold Navigation px-3 py-2  ">
                      contact{" "}
                    </span>
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    className="text-decoration-none text-reset  py-2"
                    to="/blog"
                  >
                    <span className="fs-6  fw-bold Navigation px-3 py-2 ">
                      Blog{" "}
                    </span>
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
