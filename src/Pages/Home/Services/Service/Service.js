import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';
import * as IconName from "react-icons/bs";


const Service = (props) => {
    const { blog } = props;
    const date = (new Date()).toString().split(' ').splice(1, 3).join(' ');
    return (
        <Col>
            <Card className="border-0 p-0 text-start card-container mb-4">
                <div className="image-box">
                    <Card.Img variant="top" className="card-image" src={blog.img} />
                </div>

                <Card.Body className="ps-0">
                    <Card.Text className="text-muted">{date} <span> - </span> <span className="text-background">{blog.type}</span></Card.Text>
                    <Card.Title className="text-title">{blog.D_name}</Card.Title>
                    <Card.Text className="text-muted text-justify">{blog.description}</Card.Text>
                    <Card.Text className="text-muted fw-bold mt-4 read-more">READ MORE <IconName.BsPlusCircleFill className="fs-5 icon-background mb-1 ms-2" /></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;