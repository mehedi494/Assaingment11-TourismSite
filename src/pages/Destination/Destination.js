import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const Destination = () => {
    return (
        <div id="destination">
            <h1 style={{ color: "darkgreen" }}>Destination Goal <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px' }} icon={faStreetView} /></h1>
            <div className="gallary-container">
                <div className="card">
                    <div className="card-img">
                        <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px' }} icon={faMapMarkerAlt} />
                    </div>
                    <div className="card-body">
                        <h3>BANKOK</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img"><FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px' }} icon={faMapMarkerAlt} /></div>
                    <div className="card-body">
                        <h3>BANGLADESH</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px' }} icon={faMapMarkerAlt} />
                    </div>
                    <div className="card-body">
                        <h3>NEWSLAND</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px' }} icon={faMapMarkerAlt} />
                    </div>
                    <div className="card-body">
                        <h3>NEPAL</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px' }} icon={faMapMarkerAlt} />
                    </div>
                    <div className="card-body">
                        <h3>INDONESSIA</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <FontAwesomeIcon style={{ fontSize: '30px', marginTop: '10px' }} icon={faMapMarkerAlt} />
                    </div>
                    <div className="card-body">
                        <h3>CHINA</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;         