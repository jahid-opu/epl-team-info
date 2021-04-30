import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetails from '../TeamDetails/TeamDetails';

const Team = () => {
    const [team,setTeam] = useState({});
    const {id} = useParams();
    useEffect(() =>{
        const url = ` https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(response =>response.json())
        .then(data => setTeam(data.teams[0]))
    },[id])
    return (
        <div>
            <TeamDetails team={team}></TeamDetails>
        </div>
    );
};

export default Team;