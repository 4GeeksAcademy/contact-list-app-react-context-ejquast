import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const Modal = ({ show, onClose, onDelete }) => {
    const[modalState, setModalState] = useState(false)
    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button onClick={onClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Delete conact?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={onClose}>No!</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onDelete}>Yes!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * here is where you define the data-types for
 * your component propersties
**/
Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

/**
 * here is where you define the default values for
 * your component propersties
 * style={{display: (props.show) ? 'inline-block' : 'none'}}
**/
//Modal.defaultProps = {
  //show: false,
  //onClose: null
//};

export default Modal;