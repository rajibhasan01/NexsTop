import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Guide from '../Guide/Guide';

const Guides = () => {
    const [doctorList, setDoctorList] = useState([]);
    useEffect(() => {
        fetch('/database3.json')
            .then(res => res.json())
            .then(data => setDoctorList(data))
            .catch(error => { console.log(error.message) })

    }, []);

    return (
        <div className="marginTop">
            <img src="https://i.ibb.co/TYXYR5d/meet-the-doctors.jpg" className="w-100 mb-md-5" alt="meet the doctor" />

            <div className="container-fluid px-5 my-5">
                <Row xs={1} md={3} lg={4} xl={5} className="g-5 px-md-5">

                    {

                        doctorList?.map(dctr => <Guide
                            key={dctr.id}
                            doctor={dctr}
                        />)
                    }


                </Row>
            </div>
        </div>
    );
};

export default Guides;