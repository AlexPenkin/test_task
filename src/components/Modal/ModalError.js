import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const ModalError = ({name, message}) => (
    <div className="modal-message-box-error">
        <span className="modal-message-box-error-name">
            {`${name}: `}
        </span>
        <span className="modal-message-box-error-message">
            {message}
        </span>
    </div>
);


ModalError.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default ModalError;
