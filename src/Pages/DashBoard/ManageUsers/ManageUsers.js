import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './ManageUsers.css';
import useAuth from '../../../Hooks/useAuth';


const ManageUsers = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState([]);
    const [countDelete, setCountDelete] = useState(0);


    useEffect(() => {

        fetch(`https://vast-headland-83482.herokuapp.com/manageusers`)
            .then(res => res.json())
            .then(data => setUserData(data));

    }, [countDelete]);

    const handleDelete = email => {
        const proceed = window.confirm("Are you sure! you want to delete this?");

        if (proceed) {
            fetch(`https://vast-headland-83482.herokuapp.com/manageusers/${email}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Remove successfully');
                        setCountDelete(countDelete + 1);
                    }
                });
        }

    }

    const handleUpdate = email => {
        const status = ['Approved'];

        fetch(`https://vast-headland-83482.herokuapp.com/manageusers/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Request Approved');
                    setCountDelete(countDelete + 1);
                }
            });
    }

    return (
        <div className="py-5">
            <div className="text-center container mt-5 py-5">
                <h4 className="google-font text-warning">Admin Panel</h4>
                <h1 className="pb-5">Manage All Data Here</h1>
                <table className="table table-hover ">
                    <thead className="background-thead">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Total Bookings</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData?.map((uData, i) => <User
                                key={uData._id}
                                data={uData}
                                handleRemove={handleDelete}
                                handleUpdate={handleUpdate}
                                id={i}

                            />)
                        }
                    </tbody>
                </table>

            </div>


        </div>
    );
};

export default ManageUsers;