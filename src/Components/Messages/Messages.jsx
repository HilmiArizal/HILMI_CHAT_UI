import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import './Messages.css';



const Messages = (props) => {
    return (
        <ScrollToBottom>
            <div className="body-message">
                {props.messages.map((item, index) =>
                    <div key={index}>
                        <Message message={item} name={props.name} />
                    </div>
                )}
            </div>
        </ScrollToBottom>
    )
}

export default Messages;