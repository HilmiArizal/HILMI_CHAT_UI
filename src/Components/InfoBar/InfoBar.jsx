import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { MDBIcon, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import Online from '../../Images/Online.png';
import './InfoBar.css';

const InfoBar = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(true)
    }

    return (
        <div className="body-infobar">
            <div className="section-infobar">
                <div className="card-infobar">
                    <div className="sub-section-left-infobar">
                        <img src={Online} alt="online-img" className="online-img" />
                        <div>{props.name}</div>
                        <div  onClick={toggle}><i className="fa fa-eye icon-infobar"/></div>
                        <MDBModal isOpen={modal} toggle={toggle} centered>
                            <MDBModalHeader toggle={toggle} onClick={() => setModal(false)}></MDBModalHeader>
                            <MDBModalBody>
                                <div className="body-modal-infobar">
                                    <div>Anda berada di room : {props.room}</div>
                                </div>
                            </MDBModalBody>
                        </MDBModal>
                    </div>
                    <div className="sub-section-right-infobar">
                        <a href="/">
                            <MDBIcon icon="times" className="icon-close" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBar;