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
            <h1 className="mt-5">{user.displayName}</h1>
            <div className="row g-4 my-5">
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