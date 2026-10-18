import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
       <Navbar expand="lg" className="bg-body-secondary shadow">
      <Container>
        <Navbar.Brand href="/"><h2><b className='text-primary'>JOBsearch</b></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Jobseekers" id="basic-nav-dropdown" className='ms-md-2'>
              <NavDropdown.Item href="/search">Search For Your Next Job</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tips">
                Tips and Advise
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">More Resources</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Frequently Asked Questions
              </NavDropdown.Item>
            </NavDropdown>

             <NavDropdown title="Employers" id="basic-nav-dropdown" className='ms-md-2'>
              <NavDropdown.Item href="#action/3.1">Advertise Your Job</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>

             <NavDropdown title="About" id="basic-nav-dropdown" className='ms-md-2'>
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Our Mission
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                What's Going On
              </NavDropdown.Item>
            </NavDropdown>

           
          </Nav>

           <button className='btn btn-primary rounded'>Login/Register</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header