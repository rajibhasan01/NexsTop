import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import * as CgIcon from "react-icons/cg";
import './GuideDetails.css';


const GuideDetails = () => {
    const { drID } = useParams();
    const [guideInfo, setGuideInfo] = useState([]);

    useEffect(() => {
        fetch('https://vast-headland-83482.herokuapp.com/guides')
            .then(res => res.json())
            .then(data => setGuideInfo(data))
            .catch(error => { console.log(error.message) })

    }, []);

    const key = parseInt(drID);

    const guide = guideInfo.filter(gdInfo => key === gdInfo.id);


    return (
        <div className="pt-5">

            <div className="marginTop py-5 ">
                <div className="bg-light py-4 mt-md-3 mb-md-5">
                    <div className="container-fuild mx-5 px-md-5 ">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="text-dark">{guide[0]?.D_name}</h3>
                            <h6 className="text-muted">Home - {guide[0]?.type} - <span className="text-info ms-0">{guide[0]?.D_name}</span></h6>
                        </div>
                    </div>

                </div>

                <div className="row my-5 mx-5 pt-md-5">
                    <div className="bg-white col-12 col-md-6 col-lg-4">
                        <Card className="card-body-design">
                            <Card.Text className="text-muted d-flex justify-content-between">
                                <HashLink className="text-decoration-none text-info take-appointment read-more" to='/guides'><CgIcon.CgChevronDoubleLeft className="fs-5 icon-background mb-0" /> Back to Prev page</HashLink>
                            </Card.Text>
                            <div className="image-box">
                                <Card.Img variant="top" src={guide[0]?.img} className="card-body-design gallery p-0" />
                            </div>

                            <Card.Body className="my-5 d-flex justify-content-start">
                                <div>
                                    <Card.Title className="fw-bold fs-3">{guide[0]?.D_name}</Card.Title>
                                    <Card.Text className="text-info">
                                        {guide[0]?.type}
                                    </Card.Text>

                                    <Card.Text className="mb-5 text-muted">
                                        {guide[0]?.description}
                                    </Card.Text>

                                    <Card.Text className="text-muted fw-light mt-4 ">01754-063712</Card.Text>
                                    <hr />
                                    <Card.Text className="text-muted fw-light mt-4 py-2">hasan.rajib1996@gmail.com</Card.Text>
                                    <hr />
                                    <Card.Text className="fw-bold my-4 py-2">
                                        <HashLink className="text-decoration-none fs-5 text-info take-appointment read-more" to='/appointment'>Book Your Package<CgIcon.CgChevronDoubleRight className="fs-4 icon-background mb-0 ms-2" /></HashLink>
                                    </Card.Text>
                                    <Card.Text className="text-muted d-flex justify-content-between">
                                        <HashLink className="text-decoration-none text-info take-appointment read-more" to='/home'><CgIcon.CgChevronDoubleLeft className="fs-5 icon-background mb-0" /> Back to Home page</HashLink>
                                    </Card.Text>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6 col-lg-8 text-design">
                        <h3 className="mx-5 mt-4 mb-5">Our professionals Guides</h3>
                        <Card.Text className="mx-md-5 fs-5 text-dark">
                            Nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel euiriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at ver eros et accumsan et. <br /> <br />

                            <span className="fs-6 text-muted ms-0">
                                Iusto odio dignissim qui blandit praesent luptatum zril delenit augue duis dolore te feugait nulla facilisi. lacerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eor um claritatem. Investigationes demonstraverun lectores legere me lius quod ii legunt saepius vel illum dolore eu feugiat nulla facilisis at vero. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos trud exerci tation ullamcorper suscipit lobortis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie co nsequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit. Typi non habent claritatem insitam; est usus legentis in iis qui facit eor um claritatem. Investigationes demonstraverun lectores legere me lius quod ii legunt saepius vel illum dolore eu feugiat nulla facilisis at vero. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos trud exerci tation ullamcorper suscipit lobortis lius quod ii legunt saepius vel illum dolore eu feugiat nulla facilisis at vero.</span>
                        </Card.Text>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default GuideDetails;