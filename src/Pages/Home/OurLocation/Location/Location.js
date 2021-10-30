import React from 'react';
import * as IconName from "react-icons/bs";

const Location = ({ locate }) => {
    return (
        <div className="col-md-3 my-4">
            <div className="card border-0 border-start">
                <div className="card-body">
                    <h5 className="card-title read-more">{locate.D_name} <IconName.BsPlusCircleFill className="fs-5 icon-background mb-1 ms-2" /></h5>
                    <p className="card-text text-muted my-0">{locate.address}</p>
                    <p className="card-text text-muted">{locate.city}</p>
                </div>
            </div>
        </div>
    );
};

export default Location;