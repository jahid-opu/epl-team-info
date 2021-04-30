import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import './Teams.css'

const Teams = (props) => {
    const { strAlternate, strSport, strTeamBadge,idTeam} = props.team;
    const history = useHistory();
    const handleClick = (id) =>{
        const url = `/team/${id}`;
        history.push(url);
    }
    return (
        <div className="team-card">
            <img src={strTeamBadge} alt="" />
            <h3>{strAlternate}</h3>
            <p>Sports type: {strSport}</p>
            <button className="btn" onClick={()=>handleClick(idTeam)} >Explore  <FontAwesomeIcon icon={faArrowRight} /> </button>
        </div>
    );
};

export default Teams;