import React, { useEffect, useState } from 'react';
import Professional from '../Professional/Professional';

const Professionals = () => {
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
        <div className="container my-5">
            <h1 className="my-md-5 py-md-5">Meet our Guides</h1>
            <div className="row">

                {
                    serviceData.Professionals?.map(professional => <Professional
                        key={professional.id}
                        professional={professional}
                    />)
                }

            </div>

        </div>
    );
};

export default Professionals;