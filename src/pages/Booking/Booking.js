import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';


import './Booking.css';
import useAuth from './../../Components/Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLuggageCart } from '@fortawesome/free-solid-svg-icons';



const Booking = () => {
    

    const { packegeId } = useParams();
    const [service, setService] = useState({});
    const { title, description, country, img, price } = service;
    useEffect(() => {
        const url = `https://shielded-reaches-31544.herokuapp.com//packege/${packegeId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    const user = useAuth()



    const handleClick = () => {
        
        
        axios.post('https://shielded-reaches-31544.herokuapp.com/addCart', {
            
            title: title,
            description: description,
            country: country,
            img: img,
            price: price
        })

            .then(res => {
                if (res.data.insertedId) {
                    alert('added Successfully, Check My Trips or back to add more')

                }

            })
    }




    return (

        <div className='container'>

            <div className='box'>

                <div className="image"><img src={service.img} alt="" /></div>

                <div className="body"><h2 id="title" className="title" > {service.title} </h2>
                    <h4 className="title"> {service.country} </h4>
                    <p className="description" > {service.description}</p>
                    <h5 className="description" >$ {service.price}</h5>

                    <Button onClick={handleClick} variant="contained"><FontAwesomeIcon style={{ fontSize: '25px', marginRight: '5px' }} icon={faLuggageCart} /> Add to Trip</Button>{/* </Link> */}</div>

            </div>

        </div>
    );
};

export default Booking;