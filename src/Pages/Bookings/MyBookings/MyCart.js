import React from 'react';
import './MyCart.css';

const MyCart = ({ cart }) => {
    console.log(cart);
    return (
        <div className="col-12 col-xl-6">
            <div className="card card-design border-0 mb-3 py-3 rounded">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={cart.img} className="img-fluid rounded" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{cart.type}</h5>
                            <p className="card-text google-font my-0">{cart.description}</p>
                            <p className="card-text my-0">Need To Pay: {parseInt(cart.price) * cart.quantity}/=</p>
                            <p className="card-text"><small className="text-warning">Booking Quantity: {cart.quantity} times</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;