import React from 'react';
import './Gallary.css';

const Gallary = () => {
    return (
        <div id="gallary">
            <h1 style={{color:"darkgreen"}}>This Is Hilirious Gallarys</h1>
            <div className="gallary-container">
                <div className="card">
                    <div className="card-img"><img src="https://image.freepik.com/free-photo/tropical-beach_74190-188.jpg" alt="" /></div>
                    <div className="card-body">
                        <h3>PATAYA BEACH,BANKOK</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img"><img src="https://image.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9129.jpg" alt="" /></div>
                    <div className="card-body">
                        <h3>SAJEK,BANGLADESH</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img"><img src="https://image.freepik.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg" alt="" /></div>
                    <div className="card-body">
                        <h3>ATESCITA,NEWSLAND</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;