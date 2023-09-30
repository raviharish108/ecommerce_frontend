import Carousel from 'react-bootstrap/Carousel';

import { Col, Container, Row } from "react-bootstrap";


export function Slider() {
  return (
    <Container >
      <Row className="justify-content-center align-items-center">
        <Col className='mx-0'>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 "
                src="https://mobirise.com/extensions/commercem4/assets/images/3.jpg" 
                alt="First slide"
                style={{height:'700px',object:'cover',width:"500px" }}
              />
              <Carousel.Caption>
                <h3 className='text-dark'>Electronics</h3>
                <p className="d-none d-sm-block text-dark">
                  "Electronics Items Are Available in our Online-Shopping"
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 "
                src="https://mobirise.com/extensions/commercem4/assets/images/1.jpg"
                alt="Second slide"
                style={{height:'700px',object:'cover' }}
              />

              <Carousel.Caption>
                <h3 className='text-dark'>Security</h3>
                <p className="d-none d-sm-block text-dark">
                Security is a priority. HTTPS and Firewall are just a few of the many mechanisms we have
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://www.nobiru.jp/uploads/2021/11/headphones-stationary-1024x684.jpg"
                alt="Third slide"
                style={{height:'700px',object:'cover' }}
              />

              <Carousel.Caption>
                <h3 className="text-dark">Free</h3>
                <p className="d-none d-sm-block text-dark">
                Our service is 100% free. Create as many links as you want, and also track statistics for each link
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3 fs-4">Best Products are available in Online-Shopping</h2>
        <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </Container>
  );
}

