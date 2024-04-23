import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md='9'>
            <div className='media m-5 d-flex'>
              <img
                width={150}
                height={150}
                className='mr-3'
                src='https://img.razrisyika.ru/kart/125/900/498989-smaylik-radost-17.jpg'
                alt='img'
              />
              <div className='media-body'>
                <h5>Blog post</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus? Ipsam rerum exercitationem porro nihil, optio itaque debitis quisquam mollitia animi ratione, vel quas officia eveniet hic, placeat obcaecati delectus?</p>
              </div>
            </div>
            <div className='media m-5 d-flex'>
              <img
                width={150}
                height={150}
                className='mr-3'
                src='https://img.razrisyika.ru/kart/125/900/498989-smaylik-radost-17.jpg'
                alt='img'
              />
              <div className='media-body'>
                <h5>Blog post</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus? Ipsam rerum exercitationem porro nihil, optio itaque debitis quisquam mollitia animi ratione, vel quas officia eveniet hic, placeat obcaecati delectus?</p>
              </div>
            </div>
            <div className='media m-5 d-flex'>
              <img
                width={150}
                height={150}
                className='mr-3'
                src='https://img.razrisyika.ru/kart/125/900/498989-smaylik-radost-17.jpg'
                alt='img'
              />
              <div className='media-body'>
                <h5>Blog post</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus? Ipsam rerum exercitationem porro nihil, optio itaque debitis quisquam mollitia animi ratione, vel quas officia eveniet hic, placeat obcaecati delectus?</p>
              </div>
            </div>
            <div className='media m-5 d-flex'>
              <img
                width={150}
                height={150}
                className='mr-3'
                src='https://img.razrisyika.ru/kart/125/900/498989-smaylik-radost-17.jpg'
                alt='img'
              />
              <div className='media-body'>
                <h5>Blog post</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus? Ipsam rerum exercitationem porro nihil, optio itaque debitis quisquam mollitia animi ratione, vel quas officia eveniet hic, placeat obcaecati delectus?</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}