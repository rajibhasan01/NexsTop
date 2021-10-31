import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import * as CgIcon from "react-icons/cg";
import AvailableDoctor from '../AvailableDoctor/AvailableDoctor';
import './SingleServiceDetails.css';
import { Link } from 'react-router-dom';

const SingleServiceDetails = () => {
    const { serviceID } = useParams();
    const [singleItem, setSingleItem] = useState([]);
    const [doctors, setDoctors] = useState([]);


    useEffect(() => {
        fetch('/database2.json')
            .then(res => res.json())
            .then(data => setSingleItem(data))
            .catch(error => { console.log(error.message) })

    }, []);

    useEffect(() => {
        fetch('/database3.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
            .catch(error => { console.log(error.message) })

    }, []);

    const key = parseInt(serviceID);

    const displayItem = singleItem.filter(item => key === item.id);
    const availableDr = doctors.filter(dr => key === dr.D_id);


    console.log("doctore", availableDr);


    return (
        <div className="container marginTop py-5">
            <div className="py-5 mt-5">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-9 pe-5 mb-5">

                        <Card.Title className="text-dark fs-4 pb-4">{displayItem[0]?.D_name}</Card.Title>
                        <Card className="border-0 text-start">
                            <Card.Img variant="top" src={displayItem[0]?.img} />
                            <Card.Body className="border-0 ps-0">
                                <Card.Text className="text-muted">
                                    {displayItem[0]?.description}
                                </Card.Text>

                                <Card.Text className="text-dark fs-5">
                                    How long does it take to get results?
                                </Card.Text>

                                <Card.Text className="text-success">
                                    {displayItem[0]?.R_time}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 ps-0 bg-white">
                                <small className="text-dark">Price:<span className="text-muted fw-normal ms-1"> $ {displayItem[0]?.price}</span></small>
                            </Card.Footer>
                            <Card.Text className="text-muted d-flex justify-content-between">
                                <HashLink className="text-decoration-none text-info take-appointment read-more" to='/home'><CgIcon.CgChevronDoubleLeft className="fs-5 icon-background mb-0" /> Back to Home page</HashLink>

                                <Link className="text-decoration-none text-info read-more" to='/appointment'>Book this package<CgIcon.CgChevronDoubleRight className="fs-5 icon-background mb-0 ms-2" /></Link>
                            </Card.Text>
                        </Card>
                    </div>


                    <div className="col-12 col-md-5 col-lg-3 mt-5 mt-md-0">

                        <div className="row g-4">
                            <h4 className="ps-md-5 text-center ms-md-3">Available Guides</h4>
                            {
                                availableDr?.map(dctr => <AvailableDoctor
                                    key={dctr.id}
                                    doctor={dctr}
                                />)
                            }

                        </div>
                    </div>

                </div>

            </div>

        </div >
    );
};

export default SingleServiceDetails;