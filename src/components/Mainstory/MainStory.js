import React from 'react'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

// import "./Mainstory.scss"
const buttonStyles = { 
  paddingLeft : '20px',
  paddingRight: '20px',
  marginTop: '7px',
  height : '80%'
}
const centerStyle = {
  textAlign: 'center'
}
export default function MainStory() {
  return (
    <div style={{height: '100%'}}>
        <Card style={{height: '100%'}}>
        <Card.Body className="text-center">
        <img className = 'mainstoryimage' src={"./assets/mainstory1.png"} alt="no image" />
        <h2><bold>LAUNCH OF NIT SRINAGAR'S
GIVING WEBSITE</bold></h2>
    <p style={centerStyle}>
              <Button variant="secondary" size="sm" style={buttonStyles}>
                UNLIMITTED
              </Button>
    </p>
        
          <p style={{'textAlign': 'justify', 'textJustify': 'inter-word', 'fontSize': '16pt'}}>UnlimNITSRI are the aspirations of NITSRI!

UnlimNITSRI is the belief in our ability to bring positive change!

UnlimNITSRI are the opportunities we hope to offer every student!

UnlimNITSRI is our conviction that we can lead the world in research and innovation!</p>
        </Card.Body>
        </Card>
    </div>
  )
}
