import React, { useEffect, useState } from 'react';
import Location from '../Location/Location';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/locations')
            .then(res => res.json())
            .then(data => setLocations(data))
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
                    locations?.map(location => <Location
                        key={location.id}
                        locate={location}
                    />)
                }

            </div>



        </div>
    );
};

export default Locations;