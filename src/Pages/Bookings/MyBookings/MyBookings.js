import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyCart from './MyCart';
import * as BsIcon from 'react-icons/bs';

const MyBookings = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [countDelete, setCountDelete] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/users?search=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [countDelete]);

    const handleRemove = id => {
        const url = `http://localhost:5000/users/${id}`
        const proceed = window.confirm('Are you sure to cancelling this bookings');

        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Cancelled booking successfully');
                        setCountDelete(countDelete + 1);
                    }
                });
        }

    }

    return (
        <div className="py-5 text-center container">
            <h4 className="mt-5 google-font text-warning">yeea my bookings</h4>
            <h1 className="py-2 text-muted">{user.displayName}</h1>

            <div className="row g-4 g-md-5 my-5">
                {myOrder.length ?
                    myOrder?.map(order =>
                        <MyCart
                            key={order.id}
                            cart={order}
                            handleRemove={handleRemove}
                        />
                    )
                    :
                    <div>
                        <h1 className="text-muted mb-3"><BsIcon.BsEmojiFrown /></h1>
                        <h3>You didn't books any package</h3>
                        <p className="google-font">see our lattest offer package</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyBookings;