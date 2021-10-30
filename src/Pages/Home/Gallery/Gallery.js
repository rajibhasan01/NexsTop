import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
    return (
        <Container fluid className="mb-5 pb-5">
            <Row className="g-4" xs={1} md={2} lg={4}>
                <Col>
                    <Row xs={1} className="g-4">
                        <Col >
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/2hpN3YR/our-team-img-8-1.jpg" />
                            </div>

                        </Col>

                        <Col>
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/BzNqHff/our-team-img-9.jpg" />
                            </div>
                        </Col>
                    </Row>

                </Col>

                <Col>
                    <Row>
                        <Col>
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/C8pZ9Xp/pexels-elina-fairytale-3810767.jpg" />
                            </div>
                        </Col>
                    </Row>

                </Col>
                <Col>
                    <Row xs={1} className="g-4">
                        <Col>
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/0BPgD13/Capturefd.jpg" />
                            </div>
                        </Col>

                        <Col>
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/XtsfpYP/112.jpg" />
                            </div>
                        </Col>
                    </Row>

                </Col>
                <Col>
                    <Row>
                        <Col>
                            <div className="image-box">
                                <Image className="w-100 gallery" src="https://i.ibb.co/Lrbg3Sr/our-team-img-6-1.jpg" />
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>


        </Container>
    );
};

export default Gallery;