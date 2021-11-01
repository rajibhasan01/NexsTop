import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import '../ServicesHeader/ServicesHeader';

const Services = () => {
    const [tourPlaces, setTourPlaces] = useState([]);
    const [selection, setSelection] = useState(0);
    const [btnW, setBtnW] = useState(false);
    const [btnS, setBtnS] = useState(false);
    const [btnH, setBtnH] = useState(false);


    useEffect(() => {
        fetch('https://vast-headland-83482.herokuapp.com/tourplaces')
            .then(res => res.json())
            .then(data => setTourPlaces(data))
            .catch(error => {
                console.log(error.message);
            });
    }, []);

    let TourPlace = tourPlaces;

    if (selection === 1) {
        TourPlace = tourPlaces?.slice(0, 5);
    }

    else if (selection === 2) {
        TourPlace = tourPlaces?.slice(5, 12);
    }

    else if (selection === 3) {
        TourPlace = tourPlaces?.slice(8, 14);
    }

    return (
        <div className="container-fluid px-5">
            <h3 className="google-font text-center text-warning">let's Try Now</h3>
            <h1 className="text-center">Latest Packages</h1>

            <div className="d-flex justify-content-center displayDesign">
                <div className="bgColor px-3 py-2 rounded-pill mt-4 ">

                    <button onClick={() => { setSelection(1); setBtnW(true); setBtnH(false); setBtnS(false) }} className={btnW ? "btnHeader dBlock activeBtn" : "btnHeader dBlock"} >
                        Winter Vaccation
                    </button>

                    <button onClick={() => { setSelection(3); setBtnW(false); setBtnH(true); setBtnS(false) }} className={btnH ? "btnHeader dBlock activeBtn" : "btnHeader dBlock"}>
                        Honeymoon Destination
                    </button>

                    <button onClick={() => { setSelection(2); setBtnS(true); setBtnW(false); setBtnH(false) }} className={btnS ? "btnHeader dBlock activeBtn" : "btnHeader dBlock"}>
                        Summer Vaccation
                    </button>

                </div>
            </div>


            <Row xs={1} md={3} lg={4} className="g-5 my-5">
                {
                    TourPlace?.map(tp => <Service
                        key={tp._id}
                        tourPlace={tp}
                    />)
                }

            </Row>


        </div>
    );
};

export default Services;