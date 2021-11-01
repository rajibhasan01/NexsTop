import React from 'react';
import * as MdIconName from "react-icons/md";
import * as TiIconName from "react-icons/ti";

const User = ({ data, handleRemove, handleUpdate }) => {
    const { name, email, quantity, phone, product_id } = data;
    return (
        <tr className="border">
            <th scope="row">{product_id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{quantity}</td>
            <td>pending</td>
            <td><span onClick={() => handleUpdate(email)} className="remove-btn"><TiIconName.TiTick className="fs-5" /></span> <span onClick={() => handleRemove(email)} className="remove-btn"><MdIconName.MdDelete className="fs-5" /></span></td>
        </tr>
    );
};

export default User;