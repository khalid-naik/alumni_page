import React from 'react'
import Card from 'react-bootstrap/Card'
import {Container, Row, Col} from 'react-bootstrap'

export default function OtherStories() {
  return (
    <div>
        <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col><img src={"./assets/otherstory1.png"} alt="no image" /> </Col>
              <Col>NITSRI’s contribution to Republic Day Parade
NIT Srinagar contributed to this year’s republic day parade on January 26 and beating retreat ceremony on January 29 in several ways which include</Col>
            </Row>
          </Container>
        </Card.Body>
        </Card>
        <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col><img src={"./assets/otherstory2.png"} alt="no image" /></Col>
              <Col>NIT Srinagar Professor Dr. Dilip T Shahani to be conferred with Padma Shri Award 2022
Prof. Dilip T Shahani, Honorary Professor at NIT Srinagar, has been named for the Padma Shri Award 2022, one of the highest civilian awards</Col>
            </Row>
          </Container>
        </Card.Body>
        </Card>
        <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col><img src={"./assets/otherstory3.png"} alt="no image" /></Col>
              <Col>Generous Contributions from NIT Srinagar Alums
Since the launch of NIT Srinagar Endowment Fund on October 31, 2019, by the President of India, alumni have been contributing generously towards advancement</Col>
</Row>
          </Container>
        </Card.Body>
        </Card>
    </div>
  )
}
