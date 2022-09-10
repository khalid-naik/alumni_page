import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
const addMargin = {
    margin: '5px'
}
const makeGray = {
    backgroundColor: 'gray',
    color : 'white',
    paddingLeft : '10%',
    paddingRight : '10%'
}
const linkColor = {
    color : 'white', 
    display: 'block', 
    textDecoration: 'none'
}
const footerheading = {
    color : 'orange',
    paddingBottom : '20px',
    textAlign : 'center'
}
export default function Footer() {
  return (
    <div>
        {/* <Container style={makeGray}> */}
            {/* <Row style={addMargin}> */}
                {/* <Col> */}
                    <Card style={{height: '100%', borderWidth: '0 0 0 0'}}>
                        <Card.Body style={makeGray}>
                            <u><h4 style={footerheading}>DEAN, ALUMNI RELATIONS</h4></u>
                            <p style={{'textAlign': 'justify', 'textJustify': 'inter-word'}}>
                                PROF. PVM RAO
                                P. V. Madhusudhan Rao is professor in departments of mechanical engineering and design at NIT Srinagar. He also serves as head of the department of design. He is a co-founder of Assistech lab in Khosla school of information technology, which works towards development of assistive technologies for empowerment of visually challenged. As a coordinator of NIT Srinagar Design Innovation Center (DIC), he is also responsible for initiating and driving multiple programs in design, innovation & entrepreneurship.

                                More on his webpage: https://web.iitd.ac.in/~pvmrao/
                            </p>
                        </Card.Body>
                    </Card>
                {/* </Col> */}
                {/* <Col>
                    <Card style={{height: '100%', borderWidth: '0 3px 0 3px'}}>
                        <Card.Body style={makeGray}>
                            <u><h4 style={footerheading}>QUICK LINKS</h4></u>
                            <p style={{'textAlign': 'justify', 'textJustify': 'inter-word'}}>
                                <a style={linkColor}href="#">DISTINGUISHED ALUMS</a>
                                  <a style={linkColor}href="#">HOW TO OBTAIN TRANSCRIPT/DEGREE</a>
                                  <a style={linkColor}href="#">APPLY FOR LIFELONG INSTITUE EMAIL ID</a>

                                <a style={linkColor}href="#">INSTITUTE FACILITIES</a>
                            </p>
                        </Card.Body>
                    </Card>
                </Col> */}
                {/* <Col>
                    <Card style={{height: '100%', borderWidth: '0 0 0 0'}}>
                        <Card.Body style={makeGray}>
                            <u><h4 style={footerheading}>GET IN TOUCH WITH US</h4></u>
                            <p style={{'textAlign': 'justify', 'textJustify': 'inter-word'}}>
                                
                                AAIP, IIT Delhi, Hauz Khas, New Delhi- 110016
                                alumnidean@admin.iitd.ac.in
                                <h6>Embed map here...</h6>
                            </p>
                        </Card.Body>
                    </Card>
                </Col> */}
            {/* </Row> */}
        {/* </Container> */}
    </div>
  )
}