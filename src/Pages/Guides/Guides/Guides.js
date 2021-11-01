import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Guide from '../Guide/Guide';

const Guides = () => {
    const [guideList, setGuideList] = useState([]);
    useEffect(() => {
        fetch('https://vast-headland-83482.herokuapp.com/guides')
            .then(res => res.json())
            .then(data => setGuideList(data))
            .catch(error => { console.log(error.message) })

    }, []);

    return (
        <div className="marginTop">
            <img src="https://i.ibb.co/BjMdfqM/duy-pham-Cecb0-8-Hx-o-unsplash.jpg" className="w-100 mb-md-5" alt="meet the guide" />

            <div className="container-fluid px-5 my-5">
                <Row xs={1} md={3} lg={4} xl={5} className="g-5 px-md-5">

                    {

                        guideList?.map(guide => <Guide
                            key={guide.id}
                            doctor={guide}
                        />)
                    }


                </Row>
            </div>
        </div>
    );
};

export default Guides;