import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from "../firebase-config";
import nullPhoto from "../images/jcc-logo.png";
import React, { useState, useEffect } from 'react'

function Fetch() {
    const [AllTeams, setAllTeams] = useState([]);
    
    const teamsData = async () => {
        const q = query(collection(db, 'teams'), orderBy('order'));

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id,
        }));
        setAllTeams(data);
    };

    useEffect(() => {
      teamsData();
    }, []);
    return (
        <>
            {
                AllTeams.map((val, id) => {
                    return <div key={id} id={id} className='section'>
                        <div className='section-header'>
                            <h3>{val.title}</h3>
                            <h5>{val.description}</h5>
                        </div>
                        { val.members.map((u) => {
                            return <div key={u.nickname}>
                                <img src={u.picture == null ? nullPhoto : u.picture} alt={u.nickname} />
                                <span>{u.nickname}</span>
                                <span>{u.subtitle}</span>
                            </div>
                        }) }
                    </div>

                })
            }
        </>
    )
}
export default Fetch;
