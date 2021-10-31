import React from 'react';
import { Card, Col } from 'react-bootstrap';
import * as IconName from "react-icons/bs";
import { HashLink } from 'react-router-hash-link';


const Guide = ({ doctor }) => {
    const { img, D_name, type } = doctor;
    return (
        <Col className="bg-white">
            <Card className="card-body-design">
                <div className="image-box">
                    <Card.Img variant="top" src={img} className="card-body-design gallery p-0" />
                </div>

                <Card.Body className="my-5 d-flex justify-content-start">
                    <div>
                        <Card.Title className="fw-bold fs-3">{D_name}</Card.Title>
                        <Card.Text>
                            {type}
                        </Card.Text>
                        <Card.Text className="mt-4 read-more">
                            <HashLink className="text-decoration-none text-muted take-appointment fw-bold read-more" to={`/guide/${doctor.id}`}> Details <IconName.BsPlusCircleFill className="fs-5 icon-background mb-1 ms-2" /></HashLink></Card.Text>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Guide;