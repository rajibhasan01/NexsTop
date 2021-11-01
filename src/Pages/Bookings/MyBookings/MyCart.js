import React from 'react';
import './MyCart.css';
import * as MdIconName from "react-icons/md";

const MyCart = ({ cart, handleRemove }) => {

    return (
        <div className="col-12 col-xl-6">
            <div className="card card-design border-0 mb-3 py-3 rounded">
                <div className="row g-0">
                    <div className="col-md-5 overflow-hidden my-4">
                        <img src={cart.img} className="img-fluid rounded-end gallery" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{cart.type}</h5>
                            <p className="card-text google-font my-0">{cart.description}</p>
                            <p className="card-text text-info my-0"><span className="text-dark">Need To Pay: </span>{parseInt(cart.price) * cart.quantity}/=</p>
                            <p className="card-text"><small className="text-warning"><span className="text-dark">Booking Quantity:</span> {cart.quantity} times</small></p>
                            <span onClick={() => handleRemove(cart.id)} className="remove-btn">Remove <MdIconName.MdDelete className="fs-5" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;