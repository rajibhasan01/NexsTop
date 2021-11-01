import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://vast-headland-83482.herokuapp.com/tourplaces', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(info => {
                if (info.acknowledged) {
                    alert("added successfully");
                    reset();
                }
            })
    }

    return (
        <div className="container py-5">
            <div className="add-service my-5">
                <h1 className="text-center py-5 google-font text-muted">Please Add a Service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("D_name", { required: true, maxLength: 20 })} placeholder="Name" />

                    <input {...register("type", { required: true, maxLength: 20 })} placeholder="country" />

                    <textarea {...register("description")} placeholder="Description" />
                    <input {...register("img")} placeholder="Image url" required />

                    <input type="number" {...register("price")} placeholder="Provide a price" required />

                    <input type="number" {...register("id")} placeholder="provide an id" required />

                    <input type="number" {...register("description_details")} value={'Computed tomography (CT) scan is a useful diagnostic tool for detecting diseases and injuries. It uses a series of X-rays and a computer to produce a 3D image of soft tissues and bones. CT is a painless, noninvasive way for your healthcare provider to diagnose conditions.'} className="d-none" />
                    <input type="number" {...register("R_time")} value={'The results of the scan usually take 24 hours. A radiologist, a physician who specializes in reading and interpreting CT scan and other radiologic images, will review your scan and prepare a report that explains them. In an emergency setting, such as a hospital or emergency room, healthcare providers often receive results within an hour. Once a radiologist and your healthcare provider have reviewed the results, you will either have another appointment or receive a call. Your healthcare provider will discuss the results with you.'} className="d-none" />

                    <input type="submit" />

                </form>
            </div>
        </div>

    );
};

export default AddService;