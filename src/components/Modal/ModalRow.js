import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const ModalRow = ({
    firstName,
    lastName,
    age,
    email
}) => (
    <div className="modal-message-box-row">
        <span className="modal-message-box-row-firstName">
            <span className="modal-message-box-row-name">Имя:</span>
            <span className="modal-message-box-row-value">{firstName}</span>
        </span>
        <span className="modal-message-box-row-lastName">
            <span className="modal-message-box-row-name">Фамилия:</span>
            <span className="modal-message-box-row-value">{lastName}</span>
        </span>
        <span className="modal-message-box-row-age">
            <span className="modal-message-box-row-name">Возраст:</span>
            <span className="modal-message-box-row-value">{age}</span>
        </span>
        <span className="modal-message-box-row-email">
            <span className="modal-message-box-row-name">Почта:</span>
            <span className="modal-message-box-row-value">{email}</span>
        </span>
    </div>
);

ModalRow.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default ModalRow;
