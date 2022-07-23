import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../images/banner.png';

const Banner = () => {
    return (
        <div>
            <img
                className="d-block w-100"
                src={banner}
                alt="Fruits Banner"
            />
        </div>
    );
};

export default Banner;