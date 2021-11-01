import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyCart from './MyCart';

const MyBookings = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users?search=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, []);


    return (
        <div className="py-5 text-center container">
            <h4 className="mt-5 google-font text-warning">yeea my bookings</h4>
            <h1 className="py-2 text-muted">{user.displayName}</h1>

            <div className="row g-4 g-md-5 my-5">
                {
                    myOrder?.map(order =>
                        <MyCart
                            key={order.id}
                            cart={order}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default MyBookings;