import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import './Packege.css';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLuggageCart } from '@fortawesome/free-solid-svg-icons';


const Packege = ({ service }) => {
    
    // const {service} = props;
    const { _id,title,country, description, img,price } = service;
    return (
        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" bakcground-color="primary" color="text.secondary" >
                                {description}
                </Typography>
                <Typography gutterTop variant="h3" component="div"><small>$</small> {price}
                </Typography>
                        </CardContent>
                        <CardActions>
                <Link id="btn" to={`packege/${_id}`}><Button variant="contained" > <FontAwesomeIcon style={{fontSize:'25px', marginRight:'5px'}} icon={faLuggageCart} />  cart View more trip ({country}) </Button></Link>

                        </CardActions>
                    </Card>
        
    );
};

export default Packege;


