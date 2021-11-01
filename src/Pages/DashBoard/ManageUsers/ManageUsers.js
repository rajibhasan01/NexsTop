import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './ManageUsers.css';
import useAuth from '../../../Hooks/useAuth';


const ManageUsers = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/manageusers`)
            .then(res => res.json())
            .then(data => setUserData(data));

    }, [])

    return (
        <div className="py-5">
            <div className="text-center container mt-5 py-5">
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
                            userData?.map(uData => <User
                                key={uData._id}
                                data={uData}
                            />)
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default ManageUsers;