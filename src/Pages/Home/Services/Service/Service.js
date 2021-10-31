import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';
import * as MdIconName from "react-icons/md";
import { Link } from 'react-router-dom';


const Service = (props) => {
    const { tourPlace } = props;
    const date = (new Date()).toString().split(' ').splice(1, 3).join(' ');
    return (
        <Col>
            <Card className="border-0 p-0 text-start card-container mb-4">
                <div className="image-box">
                    <Card.Img variant="top" className="card-image img-hover" src={tourPlace.img} />
                </div>

                <Card.Text className="text-white img-text-bg py-2 text-center">{date} <span> - </span> <span className="text-background text-white pe-3"><MdIconName.MdPlace /> {tourPlace.type} </span> - <span className="text-white d-none d-md-inline">Skiing</span></Card.Text>

                <Card.Body className="ps-0">

                    <Card.Title className="text-title">{tourPlace.D_name}</Card.Title>
                    <Card.Text className="text-muted text-justify">{tourPlace.description}</Card.Text>

                    <Card.Text className="text-black d-flex justify-content-between align-items-center"><span className="ps-0 ms-0 text-title">${tourPlace.price}</span> <span><MdIconName.MdOutlineStarHalf className="fs-5 text-title" /><small className="py-2 text-title"> 6.7</small></span></Card.Text>

                    <Link className="text-decoration-none login-cursor text-secondary fs-6 mt-4 read-more" to={`/tourplaces/${tourPlace.id}`}>View Package <MdIconName.MdDoubleArrow className="fs-5 icon-background ms-2" /> </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;