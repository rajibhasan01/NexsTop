import React, { useEffect, useState } from 'react';
import Location from '../Location/Location';

const Locations = () => {
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
        <div className="container my-5 py-md-5 text-center text-md-start">
            <h1>Our Locations</h1>
            <hr className="d-md-none" />
            <div className="row">
                {
                    serviceData.Loaction?.map(lc => <Location
                        key={lc.id}
                        locate={lc}
                    />)
                }

            </div>



        </div>
    );
};

export default Locations;