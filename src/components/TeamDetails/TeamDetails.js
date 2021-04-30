import React from 'react';
import male from '../../img/male.png';
import female from '../../img/female.png';
import './TeamDetails.css'
import Banner from '../Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckCircle, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"



const TeamDetails = (props) => {
    console.log(props.team);
    const { intFormedYear, strAlternate, strCountry, strSport, strGender, strTeamBadge, strDescriptionEN } = props.team;
    let image;
    if (strGender === "Male") {
        image = <img src={male} alt="" />
    }
    else if (strGender === "Female") {
        image = <img src={female} alt="" />
    }
    const isTrue = false;
    return (
        <div>

            <Banner isTrue={isTrue} strTeamBadge={strTeamBadge}></Banner>
            <div className="teamInfo-area">
                <div className="team-info">
                    <div>
                        <h2>{strAlternate}</h2>
                        <p> <FontAwesomeIcon icon={faCheckCircle} /> Founded: {intFormedYear}</p>
                        <p> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div>
                        {image}
                    </div>
                </div>
                <p>{strDescriptionEN}</p>

                <div className="social-icon">
                    <a href="https://www.facebook.com/fcbarcelona"> <FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://twitter.com/FCBarcelona"> <FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.youtube.com/user/fcbarcelona"> <FontAwesomeIcon icon= {faYoutube}/></a>
                </div>
            </div>




        </div>
    );
};

export default TeamDetails;