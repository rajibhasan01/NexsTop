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
        <div className="container ">
            <h1>Latest Packages</h1>
            <Row xs={1} md={3} className="g-4 my-5">
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