import React, { useEffect, useState } from 'react';
import Packege from '../Packege/Packege';
import './Packeges.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';





const Packeges = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://shielded-reaches-31544.herokuapp.com/packeges')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div >
            <h2 className="text-primary mt-5" id="packeges">Available Trip Here <FontAwesomeIcon style={{ fontSize: '50px', marginRight: '5px' }} icon={faPlaneDeparture} /> </h2>
            <div className="service-container">
                {
                    services.map(service => <Packege
                        key={service._id}
                        service={service}
                    ></Packege>)
                }
            </div>
        </div>
    );
};

export default Packeges;