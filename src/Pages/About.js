import React, { Component } from 'react'
import { Col, Container, Nav, Tab, Row } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-colum mt-2'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Desing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey='first'>
                  <img src='https://milkmoonstudio.com/cdn-cgi/image/format=avif,quality=90/https://assets-global.website-files.com/63565c108c96757108b92506/646cb692c24746384f7f8ba7_Figma_-_Free_and_Paid.webp' className='w-100' alt='img' />
                  <p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus? Ipsam rerum exercitationem porro nihil, optio itaque debitis quisquam mollitia animi ratione, vel quas officia eveniet hic, placeat obcaecati delectus?</p></p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <img src='https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' className='w-100' alt='img' />
                  <p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus? Ipsam rerum exercitationem porro nihil, optio itaque debitis quisquam mollitia animi ratione, vel quas officia eveniet hic, placeat obcaecati delectus?</p></p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <img src='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' className='w-100' alt='img' />
                  <p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus? Ipsam rerum exercitationem porro nihil, optio itaque debitis quisquam mollitia animi ratione, vel quas officia eveniet hic, placeat obcaecati delectus?</p></p>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                  <img src='https://i.pinimg.com/originals/fa/05/58/fa0558357a7a23d070cfbf032b48be6f.png' className='w-100' alt='img' />
                  <p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus? Ipsam rerum exercitationem porro nihil, optio itaque debitis quisquam mollitia animi ratione, vel quas officia eveniet hic, placeat obcaecati delectus?</p></p>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                  <img src='https://miro.medium.com/v2/resize:fit:1400/1*PMvSWYzafqUVMsmQDsWEPA.png' className='w-100' alt='img' />
                  <p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus? Ipsam rerum exercitationem porro nihil, optio itaque debitis quisquam mollitia animi ratione, vel quas officia eveniet hic, placeat obcaecati delectus?</p></p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}