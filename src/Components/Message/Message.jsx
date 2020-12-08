import React from 'react';
import './Message.css';


const Message = (props) => {
    let isSentByCurrentUser = false;

    const trimmedName = props.name.trim().toLowerCase();

    if (props.message.user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser
            ?
            (
                <div className="message-section-end">
                    <p id="sent-text-me">{trimmedName}</p>
                    <div className="message-box-section-blue">
                        <p className="message-text-white">{props.message.text}</p>
                    </div>
                </div>
            )
            :
            (
                props.message.user === "admin"
                    ?
                    <div className="message-section-center">
                        <div className="message-box-section-admin">
                            <p className="message-text-dark">{props.message.text}</p>
                        </div>
                        <div className="message-user-section-admin">
                            <p id="sent-text">{props.message.user}</p>
                        </div>
                    </div>
                    :
                    <div className="message-section-start">
                        <div className="message-box-section-light">
                            <p className="message-text-dark">{props.message.text}</p>
                        </div>
                        <div className="message-user-section-light">
                            <p id="sent-text">{props.message.user}</p>
                        </div>
                    </div>
            )
    )
}

export default Message;