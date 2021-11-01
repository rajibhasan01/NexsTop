import React from 'react';

const User = ({ data }) => {
    const { name, email, quantity, phone, product_id } = data;
    return (
        <tr className="border">
            <th scope="row">{product_id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{quantity}</td>
            <td>pending</td>
            <td><button>Accept</button> <button>Delete</button></td>
        </tr>
    );
};

export default User;