import React from 'react';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">

            <Chat 
                name="Olivia"
                message="Hey ! 😊"
                timestamp="40 seconds ago"
                profilPic="https://www.benouaiche.com/wp-content/uploads/2018/12/femme-cinquantaine-medecine-chirurgie-esthetique-dr-benouaiche-paris.jpg"
            />

            <Chat 
                name="Sophia"
                message="Ola ! ❤"
                timestamp="2 days ago"
                profilPic="https://www.onlineseduction.fr/wp-content/uploads/2015/04/belle-femme-tinder.png"
            />

            <Chat 
                name="Evelyn"
                message="Whats up ?"
                timestamp="1 week ago"
                profilPic="https://i0.wp.com/www.starmag.com/wp-content/uploads/2019/07/main_resized_730x380_5d28cd984ecec_311442.jpg?resize=672%2C350&ssl=1"
            />
            
        </div>
    )
}

export default Chats
