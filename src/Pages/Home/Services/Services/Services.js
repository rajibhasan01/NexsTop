import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [serviceData, setServiceData] = useState({});

    useEffect(() => {
        fetch('./database.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
            .catch(error => {
                console.log(error.message);
            });
    }, []);

    return (
        <div className="container-fluid px-5">
            <h3 className="google-font text-center text-warning">let's Try Now</h3>
            <h1 className="text-center">Latest Packages</h1>
            <Row xs={1} md={3} lg={4} className="g-5 my-5">
                {
                    serviceData.Blog?.map(blog => <Service
                        key={blog.id}
                        blog={blog}
                    />)
                }

            </Row>


        </div>
    );
};

export default Services;