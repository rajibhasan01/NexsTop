import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as CgIcon from "react-icons/cg";

const AvailableDoctor = ({ doctor }) => {

    return (
        <div className="col-12 ms-lg-5 ps-5">
            <Card className="border-0">
                <div className="d-flex">
                    <div className="my-auto image-box">
                        <Card.Img variant="top" className="" src={doctor?.img} />
                    </div>

                    <div>
                        <Card.Body className="mx-2 p-1">
                            <Card.Title className="text-dark fs-4">{doctor.D_name}</Card.Title>
                            <Card.Text className="text-dark ">
                                <small className="text-muted"> {doctor?.type}</small>
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer className="border-0 bg-white">
                            <Link className="text-decoration-none text-info take-appointment read-more" to={`/guide/${doctor.id}`}>Visit Doctor <CgIcon.CgChevronDoubleRight className="fs-5 icon-background mb-0" /> </Link>
                        </Card.Footer>
                    </div>

                </div>

            </Card>

        </div>
    );
};

export default AvailableDoctor;