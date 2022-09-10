import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import OtherStories from '../Otherstory/OtherStories'
import MainStory from '../Mainstory/MainStory'
import './Stories.css'
const oneFourth = {
  marginLeft : '20%'
}
export default function Stories() {
  return (
    <div>
      <h2 style={oneFourth}><u><bold>TOP STORIES</bold></u></h2>
      <Row className='row'>
        <Col className='col'><OtherStories/></Col>
        <Col className='col'><MainStory/></Col>
      </Row>
    </div>
  )
}