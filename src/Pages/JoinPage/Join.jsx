import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';
import './Join.css';
import $ from 'jquery';


const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [icon, setIcon] = useState(false);
    const [warning, setWarning] = useState(false);

    const warningRoom = () => {
        setWarning(true)
    }

    const onBtnJoin = (e) => {

        setName('');
        setRoom('');

        $("#form-join")[0].reset();

    }


    return (
        <div classNames="body-join">
            <div className="section-join">
                <div className="card-join">
                    <form id="form-join">
                        <div className="title-join">
                            <div className="title-join-1">SELAMAT DATANG</div>
                            <div className="title-join-2">Bergabung sekarang dengan HilmiChat!</div>
                        </div>
                        <hr />
                        <div className="input-join">
                            <div>
                                <label>Nama anda</label>
                                <span>
                                    <input type="text" className="form-control" placeholder="Masukan nama anda" onChange={(e) => setName(e.target.value)} />
                                </span>
                            </div>
                            <div>
                                <label>Room anda</label>
                                <span>
                                    <div>
                                        <input type={icon ? "text" : "password"} className="form-control" placeholder="Masukan room anda" onChange={(e) => setRoom(e.target.value)} onFocus={warningRoom} />
                                        <MDBContainer>
                                            <i className={icon ? "fa fa-eye-slash room-icon" : "fa fa-eye room-icon"} onClick={() => setIcon(!icon)}></i>
                                        </MDBContainer>
                                    </div>
                                    <div className="warning-room">{warning ? 'Room yang anda masukan bersifat rahasia!' : ''}</div>
                                </span>
                            </div>
                            <hr />
                            <div>
                                <Link id="link-join" onClick={e => (!name || !room) ? e.preventDefault() : null} to={`chat?name=${name}&room=${room}`}>
                                    <input type="button" className="btn btn-primary" id="btn-join" onClick={onBtnJoin} value="Bergabung" />
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Join;