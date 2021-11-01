import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css';
import useAuth from '../../../Hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();
    const { bookID } = useParams();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch(`https://vast-headland-83482.herokuapp.com/users/${bookID}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Booking successfull");
                    reset();
                }
            });

    };

    return (
        <div className="py-5">
            <div className="mt-5 row mx-aut0 ms-md-auto container">
                <h3 className="ms-5 text-warning mt-5">BOOK PACKAGE NOW</h3>
                <div className="col-12 col-md-5 col-lg-4 py-5  rounded">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-design">
                        <label className="fs-5 google-font">Personal information</label>
                        <input className="form-input border-1 rounded" {...register("name")} defaultValue={user.displayName} />

                        <input className="form-input border-1 rounded" {...register("email")} value={user.email} />

                        <label className="mt-5 fs-5 google-font">Contact information</label>
                        <input className="form-input border-1 rounded" {...register("address", { required: true })} placeholder="address" />

                        <input className="form-input border-1 rounded" {...register("city", { required: true })} placeholder="city" />

                        <input className="form-input border-1 rounded" type="number" {...register("phone", { required: true })} placeholder="Phone Number" />

                        <input className="form-input border-1 rounded d-none" type="text" {...register("product_id", { required: true })} value={bookID} />

                        <input className="form-input btn bg-warning rounded" type="submit" />
                    </form>

                </div>
                <div className="col-12 col-md-7 col-lg-6">
                    <img src="https://i.ibb.co/0rJh7Z7/Pngtree-beach-travel-3d-elements-5356937-1.png" className="w-100" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Booking;