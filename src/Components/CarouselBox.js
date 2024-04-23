import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import natureImg from '../assets/nature.jpeg';
import prirodaImg from '../assets/priroda.jpeg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={natureImg}
                        alt='nature'
                    />
                    <Carousel.Caption>
                        <h3>Nature image</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Minima, voluptatibus? Ipsam rerum exercitationem porro nihil,
                            optio itaque debitis quisquam mollitia animi ratione,
                            vel quas officia eveniet hic, placeat obcaecati delectus?
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={prirodaImg}
                        alt='nature'
                    />
                    <Carousel.Caption>
                        <h3>Nature image</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Minima, voluptatibus? Ipsam rerum exercitationem porro nihil,
                            optio itaque debitis quisquam mollitia animi ratione,
                            vel quas officia eveniet hic, placeat obcaecati delectus?
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={natureImg}
                        alt='nature'
                    />
                    <Carousel.Caption>
                        <h3>Nature image</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Minima, voluptatibus? Ipsam rerum exercitationem porro nihil,
                            optio itaque debitis quisquam mollitia animi ratione,
                            vel quas officia eveniet hic, placeat obcaecati delectus?
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}