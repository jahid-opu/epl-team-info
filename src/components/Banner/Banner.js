import React from 'react';
import './Banner.css'

const Banner = (props) => {
    const {isTrue,strTeamBadge} = props;
    return (
        <div className="hero">
            <div className="hero-text">
            { isTrue ? <h1>EPL Team Info</h1> : <img src={strTeamBadge} alt=""/>
            }
            </div>
        </div>
    );
};

export default Banner;