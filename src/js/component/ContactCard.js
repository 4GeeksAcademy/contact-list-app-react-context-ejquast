import React, { useContext, useEffect, useState } from 'react';
import {withRouter, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";


export const ContactCard = ({id, name, address, phone, email }) => {
    const [contactCardState, setContactCardState] = useState(false)
    const navigate = useNavigate()
    const { store, actions } = useContext(Context);


    const deleteContact = () => {
        actions.deleteContact(id);
        navigate("/");
      };

        return (
            <div className="d-flex">
            <li className="list-group-item justify-contents-center mx-auto mb-3">
                <div className="ContactCardSizing row">
                    <div className="col px-0">
                        <img src="https://picsum.photos/200" className="rounded-circle mx-auto d-block img-fluid" />
                    </div>
                    <div className="col justify-content-between">
                        <div className="float-right">
                            <Link to={`/edit/${id}`} className="btn"><i className="fas fa-pencil-alt mr-3"></i></Link>
                            <button className="btn" onClick={() => deleteContact(id)}><i className="fas fa-trash-alt"></i></button>
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
            </div>
        );
}

// ContactCard.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     onDeleteClick: PropTypes.func.isRequired,
// };