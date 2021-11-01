import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./AddPackeges.css";


const AddPackeges = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://shielded-reaches-31544.herokuapp.com/addpackeges', data)
        // console.log(data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Successfully')
                    reset();
                }
                // console.log(res)
            })
    };
    return (
        <div className="addService">
            <h2>Add a New Events</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input required placeholder="Title" {...register("title")} />
                <input required placeholder="Country" type="text" {...register("country")} />
                <textarea required placeholder="Description"  {...register("description")} />
                <input required placeholder="image url" {...register("img")} />
                <input required type="submit" />
            </form>
        </div>

    );
};
export default AddPackeges;
