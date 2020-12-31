import TinderCard from 'react-tinder-card';
import database from './firebase';
import React, { useState, useEffect } from 'react';

import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
            const unsubcribe = database
                .collection("people")
                .onSnapshot(snapshot => 
                    setPeople(snapshot.docs.map((doc) => doc.data()))
                    
                );

            return () =>{
                    unsubcribe();
                }
        }, []);

    return (
        <div className="tinderCards__cardContainer">
            {people.map(person =>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card" >

                        <div className="card__bottom">
                            <h3><b>{person.name},</b> {person.age}</h3>
                            <p>{person.job}</p>
                        </div>

                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards
