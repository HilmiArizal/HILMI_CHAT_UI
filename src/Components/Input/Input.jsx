import React from 'react';
import { MDBIcon } from 'mdbreact';
import './Input.css';


const Input = (props) => {
    return (
        <div className="body-input">
            <div className="section-input">
                <div className="card-input">
                    <form className="form-input">
                        <div className="left-section">
                            <input
                                placeholder="Tulis pesan disini..."
                                className="form-control"
                                value={props.message}
                                onChange={(e) => props.setMessage(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' ? props.sendMessage(e) : null} />
                        </div>
                        <div className="right-section" onClick={(e) => props.sendMessage(e)}>
                            <MDBIcon icon="paper-plane" className="icon-send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Input;