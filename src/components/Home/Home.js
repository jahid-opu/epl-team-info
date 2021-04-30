import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Teams from '../Teams/Teams';
import './Home.css'

const Home = () => {
    const [teams,setTeams] = useState([]);
    useEffect(() =>{
        fetch(" https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
        .then(response =>response.json())
        .then(data => setTeams(data.teams))
    },[]);
    const isTrue= true;
    return (
        <div>
            <Banner isTrue={isTrue}></Banner>
           
       

        <div className="teams-area">
            {
                teams.map(team => <Teams team={team}></Teams>)
            }
        </div>
        </div>
    );
};

export default Home;