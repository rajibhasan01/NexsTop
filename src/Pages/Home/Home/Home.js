import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Locations from '../OurLocation/Locations/Locations';
import Professionals from '../Professionals/Professionals/Professionals';
import Services from '../Services/Services/Services';
import WinterHoliday from '../WinterHoliday/WinterHoliday';


const Home = () => {
    return (
        <div >
            <Banner />
            <Services />
            <WinterHoliday />
            <Gallery />
            <Professionals />
            <Locations />
        </div>
    );
};

export default Home;