import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import "./MyTrips.css";

const MyTrips = () => {

    const [services, setServices] = useState([])
    const [placeOrder,setPlaceOrder]=useState([])
    
    useEffect(() => {
        fetch('https://shielded-reaches-31544.herokuapp.com/addCart')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    
    const DeleteHandleClick = id => {
        const r = window.confirm('Are You sure you want to Delete')
        if (r === true) {
            const url = `https://shielded-reaches-31544.herokuapp.com/packege/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);

                        alert('Successfully Deleted')
                    }
                })
            
        }
        else {
            
        }
    }


    const handlePlaceOrder = id => {
        const title = document.getElementById('title').innerText
        const description = document.getElementById('description')?.innerText
        const country = document.getElementById('country')?.innerText
        const price = document.getElementById('price')?.innerText
        
            axios.post('https://shielded-reaches-31544.herokuapp.com/order', {
                title: title,
                description: description,
                country: country,
                price: price,
                status: 'pending'

            })

                .then(res => {
                    if (res.data.insertedId) {
                        alert('your order Has been Successfuly ')

                    }

                })

        }
        

        useEffect(() => {
            fetch('https://shielded-reaches-31544.herokuapp.com/order')
                .then(res => res.json())
                .then(data => setPlaceOrder(data));
        }, [setPlaceOrder]);


    
   


    return (
        <div id="trip-container">
            
            <div >
                <h1>Review Your Trip</h1>
                {
                    services.map(service => <div className="trip-container" >
                    <div className="trip-card">
                        <div className="img">
                            <img id='img' src={service.img} alt="" />
                        </div>
                        <div className="trip-card-body">
                            <h4 id="title"><b>{service.title}</b></h4>
                            <p id="country">{service.country}</p>
                            <h4 id="price">${service.price}</h4>
                            <h4><Button onClick={() => DeleteHandleClick(service._id)} variant="outlined">Delete</Button></h4>
                                <h4><Button variant="contained" onClick={() => handlePlaceOrder(service._id)}>Place Order</Button></h4>
                        </div>


                    </div>

                </div>)
                }
            </div>
            <div>
                <h1>My Ordered Trip </h1>

                <div>
                    {
                        placeOrder.map(order => <div className="trip-container" >
                            <div className="trip-card">
                                <div className="img">
                                    <h5>status: {order?.status}</h5>
                                </div>
                                <div className="trip-card-body">
                                    <h4 id="title"><b>{order.title}</b></h4>
                                    <h5 id="country">{order.country}</h5>
                                    <h4 id="price">{order.price}</h4>
                                    
                                    
                                </div>


                            </div>

                        </div>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default MyTrips;