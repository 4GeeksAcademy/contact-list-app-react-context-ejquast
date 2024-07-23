import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export const ContactCard = ({ id, name, address, phone, email, onDeleteClick }) => {
    const [contactCardState, setContactCardState] = useState(false)
    const navigate = useNavigate()
        return (
            <li className="list-group-item">
                <div className="row w-50">
                    <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src="https://picsum.photos/200" className="rounded-circle mx-auto d-block img-fluid" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <div className=" float-right">
                            <Link to={`/edit/${id}`} className="btn"><i className="fas fa-pencil-alt mr-3"></i></Link>
                            <button className="btn" onClick={onDeleteClick}><i className="fas fa-trash-alt"></i></button>
                        </div>
                        <label className="name lead">{name}</label>
                        <br /> 
                        <i className="fas fa-map-marker-alt text-muted mr-3"></i>
                        <span className="text-muted">{address}</span>
                        <br />
                        <span className="fa fa-phone fa-fw text-muted mr-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                        <span className="text-muted small">{phone}</span>
                        <br />
                        <span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
                        <span className="text-muted small text-truncate">{email}</span>
                    </div>
                </div>
            </li>
        );
}

ContactCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
};