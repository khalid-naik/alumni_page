import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
const mainheading = {
  paddingBottom : '10px'
}

const makeGray = {
  borderWidth: '0'
}

export default function Main() {
  return (
    <div>
        <Container>
  <Row>
    <Col>
      <u><h3 style = {mainheading}>WELCOME TO ALUMNI AFFAIRS</h3></u>
      <p style={{'textAlign': 'justify', 'textJustify': 'inter-word'}}>
      
NIT SRINAGAR is proud to have as its alumni a group of over 50,000 engineers, technologists, scientists, managers and entrepreneurs.

The Institute has enjoyed the status of “An Institute of National Importance” since 1960. The Institute acknowledges and takes immense pride in the role played by its Alumni in it's achievements. With the advancement and growth strategy of the Institute now focussing upon Internationalization, Interdisciplinary Research and Industrial Relations, we seek to further strengthen the relationship with our Alumni with an aim to translate latent possibilities into effective and actual benefits for the individuals, society and nation.

About AIA: The Alumni and International Affairs office at NIT SRINAGAR consists of a dedicated team of staff members headed by Prof. MS Mir . The Office is further assisted by the AIA Advisory Committee consisting of faculty representatives from each Department/Centre/School. In addition, a team of enthusiastic student volunteers assists the office with various activities and events. Please feel free to get in touch with us. It would be a pleasure to connect with you..
      </p>
    </Col>
    <Col>
      {/* <h3>Right</h3> */}
      {/* <p style={{'textAlign': 'justify', 'textJustify': 'inter-word'}}>
      SPIC MACAY, or the Society for the Promotion of Indian Classical Music and Culture Among Youth, is a nationwide movement founded in 1977 by Dr. Kiran Seth, presently Professor Emeritus at IIT-Delhi. He was awarded the prestigious Padma Shri award in 2009 for his contributions to the arts. The primary goal of this movement is to improve the quality of formal education by imparting knowledge of Indian history and inspiring young minds to embrace the ideals that it contains.
      </p> */}
        <Card style = {makeGray}>
        <Card.Body className = "text-center">
          <p style={{width: '300px',marginLeft: '100px', 'textAlign': 'justify', 'textJustify': 'inter-word'}}>
              <h3>Alumini Meet 2022</h3>
              <h4>7-8 may 2022</h4>
          </p>
          <img src={"./assets/nitnewimg.png"} alt="no image" style = {{margin : '15px'}} /><br></br>
          <Link to="/register"><button>Register</button></Link>
          {/* <p style = {{width: '300px',marginLeft: '100px', 'textAlign': 'justify', 'textJustify': 'inter-word'}}>
          SPIC MACAY, or the Society for the Promotion of Indian Classical Music and Culture Among Youth, is a nationwide movement founded in 1977 by Dr. Kiran Seth, presently Professor Emeritus at IIT-Delhi. He was awarded the prestigious Padma Shri award in 2009 for his contributions to the arts. The primary goal of this movement is to improve the quality of formal education by imparting knowledge of Indian history and inspiring young minds to embrace the ideals that it contains.
          </p> */}
        </Card.Body>
        </Card>
    </Col>
  </Row>
</Container>
</div>
  )
}

