import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Our team</h2>
          <CardGroup className='m-4'>
            <Card className='m-2'>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus?
                  Ipsam rerum exercitationem porro nihil
                </Card.Text>
                <Button variant='primari'>About team</Button>
              </Card.Body>
            </Card>

            <Card className='m-2'>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus?
                  Ipsam rerum exercitationem porro nihil
                </Card.Text>
                <Button variant='primari'>About team</Button>
              </Card.Body>
              <Card.Img
                variant='bottom'
                src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
              />
            </Card>

            <Card className='m-2'>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus?
                  Ipsam rerum exercitationem porro nihil
                </Card.Text>
                <Button variant='primari'>About team</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    )
  }
}