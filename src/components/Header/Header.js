import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container} from 'react-bootstrap';
const marginAdd = {
    marginLeft: '5px', 
    marginRight: '5px'
}
const buttonStyles = { 
  paddingLeft : '20px',
  paddingRight: '20px',
  marginTop: '7px',
  height : '80%'
}

// const history = useHistory();

function Header() {
  return (
    <div>
        {/* <Navbar bg="light" expand="lg"> */}
        <Navbar style = {{'backgroundColor' : 'lightgrey' , 'expand' :'lg'}}>
      <Container>
        <Navbar.Brand href="#home">
        <img style={{height: '50px', width: 'auto'}} src={"./assets/nitlogo2.png"} alt="no image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link style={marginAdd}><Link to="/">Home</Link></Nav.Link>
          {/* <Nav.Link style={marginAdd} href="#Register">Register</Nav.Link> */}
          <NavDropdown style={marginAdd} title="Events" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to = "/alumni">Alumni meet 2022</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/register">Register</Link></NavDropdown.Item>
            <NavDropdown.Item href="https://drive.google.com/u/1/uc?id=1W062Sk5zTmlsC5vxNfJ7fTLFmQCjnuNb&export=download">Download Schedule</NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>
          {/* <NavDropdown style={marginAdd} title="Department and Centres" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          {/* <NavDropdown style={marginAdd} title="Academics" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          {/* <NavDropdown style={marginAdd} title="for faculty" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          {/* <NavDropdown style={marginAdd} title="Resources" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          {/* <NavDropdown style={marginAdd} title="Dropdown #3" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          {/* <Button variant="secondary" size="sm" style={buttonStyles}>
            Give
          </Button> */}
      </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )
}

export default Header