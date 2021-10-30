import React from 'react';
import Service from '../Service/Service';

const Services = () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="container">
            <div className="row g-4">
                {
                    a.map(p => <Service
                        key={p}
                    />)

                }
            </div>

        </div>
    );
};

export default Services;