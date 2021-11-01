import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import * as CgIcon from "react-icons/cg";
import AvailableDoctor from '../AvailableDoctor/AvailableDoctor';
import './SingleServiceDetails.css';
import { Link } from 'react-router-dom';

const SingleServiceDetails = () => {
    const { tourID } = useParams();
    const [singleItem, setSingleItem] = useState([]);
    const [guides, setGuides] = useState([]);


    useEffect(() => {
        fetch('https://vast-headland-83482.herokuapp.com/tourplaces')
            .then(res => res.json())
            .then(data => setSingleItem(data))
            .catch(error => { console.log(error.message) })

    }, []);

    useEffect(() => {
        fetch('https://vast-headland-83482.herokuapp.com/guides')
            .then(res => res.json())
            .then(data => setGuides(data))
            .catch(error => { console.log(error.message) })

    }, []);

    const key = parseInt(tourID);

    const displayItem = singleItem.filter(item => key == item.id);
    const availableGD = guides.filter(dr => key == dr.D_id);


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
                                    How long does it take to get visas?
                                </Card.Text>

                                <Card.Text className="text-success">
                                    {displayItem[0]?.R_time}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 ps-0 bg-white">
                                <small className="text-dark">Cost:<span className="text-muted fw-normal ms-1"> $ {displayItem[0]?.price}</span></small>
                            </Card.Footer>
                            <Card.Text className="text-muted d-flex justify-content-between">
                                <HashLink className="text-decoration-none login-cursor text-info take-appointment read-more fs-6" to='/home'><CgIcon.CgChevronDoubleLeft className="fs-5 icon-background mb-0" /> Back to Home page</HashLink>

                                <Link className="text-decoration-none login-cursor text-info read-more fs-6" to={`/booking/${displayItem[0]?.id}`}>Book this package<CgIcon.CgChevronDoubleRight className="fs-5 icon-background mb-0 ms-2" /></Link>
                            </Card.Text>
                        </Card>
                    </div>


                    <div className="col-12 col-md-5 col-lg-3 mt-5 mt-md-0">

                        <div className="row g-4">
                            <h4 className="ps-md-5 text-center ms-md-3">Available Guides</h4>
                            {
                                availableGD?.map(guide => <AvailableDoctor
                                    key={guide.id}
                                    doctor={guide}
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