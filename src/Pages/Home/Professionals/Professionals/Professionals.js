import React, { useEffect, useState } from 'react';
import Professional from '../Professional/Professional';

const Professionals = () => {
    const [guides, setGuides] = useState([]);

    useEffect(() => {
        fetch('https://vast-headland-83482.herokuapp.com/guides?size=4')
            .then(res => res.json())
            .then(data => setGuides(data))
            .catch(error => {
                console.log(error.message);
            });
    }, []);

    return (
        <div className="container my-5 pb-5">
            <h1 className="my-md-5 py-md-5">Meet our Guides</h1>
            <div className="row">

                {
                    guides?.map((guide, i) => <Professional
                        key={guide.id}
                        professional={guide}
                        i={i}
                    />)
                }

            </div>

        </div>
    );
};

export default Professionals;