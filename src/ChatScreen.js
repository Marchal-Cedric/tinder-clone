import Avatar from '@material-ui/core/Avatar';
import React, { useState } from 'react';

import './ChatScreen.css';

function ChatScreen() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Olivia",
            image: "https://www.benouaiche.com/wp-content/uploads/2018/12/femme-cinquantaine-medecine-chirurgie-esthetique-dr-benouaiche-paris.jpg",
            message:"Hey ! 😊",
        },
        {
            message:"Hey, how are you ?",
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([... messages, {message: input}]);
        setInput('');
    }
    
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WHIT OLIVIA ON 20/11/2020</p>
            {
                messages.map(message =>
                    message.name ? (
                        <div className="chatScreen__message">
                            <Avatar className="chatScreen__image" 
                                alt={message.name} 
                                src={message.image} 
                            />
                            <p className="chatScreen__text">{message.message}</p>
                        </div>
                    ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                    )
            )}
            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text"
                />
                <button onClick={handleSend} className="chatScreen__inputButton" type="submit">SEND</button>
            </form>
        </div>
        
    )
}

export default ChatScreen
