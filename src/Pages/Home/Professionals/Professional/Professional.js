import React from 'react';
import { Card } from 'react-bootstrap';
import './Professional.css';
import * as IconName from "react-icons/bs";


const Professional = ({ professional }) => {
    const { id, D_name, img, type } = professional;
    const sate = id % 2;
    return (
        <div className="col-md-3 bg-white">

            {
                sate ? <Card className="card-body-design">
                    <div className="image-box">
                        <Card.Img variant="top" src={img} className="card-body-design gallery" />
                    </div>

                    <Card.Body className="my-5 d-flex justify-content-center">
                        <div>
                            <Card.Title className="fw-bold fs-3">{D_name}</Card.Title>
                            <Card.Text>
                                {type}
                            </Card.Text>
                            <Card.Text className="text-muted fw-bold mt-4 read-more">Details <IconName.BsPlusCircleFill className="fs-5 icon-background mb-1 ms-2" /></Card.Text>
                        </div>

                    </Card.Body>
                </Card>
                    :
                    <Card className="card-body-design">

                        <Card.Body className="my-5 d-flex justify-content-center">
                            <div>
                                <Card.Title className="fw-bold fs-3">{D_name}</Card.Title>
                                <Card.Text>
                                    {type}
                                </Card.Text>
                                <Card.Text className="text-muted fw-bold mt-4 read-more">Details <IconName.BsPlusCircleFill className="fs-5 icon-background mb-1 ms-2" /></Card.Text>
                            </div>

                        </Card.Body>
                        <div className="image-box">
                            <Card.Img variant="top" src={img} className="card-body-design gallery" />
                        </div>
                    </Card>
            }

        </div>
    );
};

export default Professional;