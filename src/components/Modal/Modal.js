import React from 'react';
import PropTypes from 'prop-types';
import ModalError from './ModalError';
import ModalRow from './ModalRow';
import './Modal.css';

const Modal = ({message, onCloseModal, deleteRow}) => (
    <div className="modal">
        <div className="modal-message-box">
            <div className="modal-message-box-title">{message.title}</div>

            <button onClick={onCloseModal} className="close" />
            {
                (message.type === 'error' || message.type === 'success') &&
                <ModalError name={message.name} message={message.message} />
            }
            {message.type === 'row' &&
            <ModalRow
                lastName={message.lastName}
                firstName={message.firstName}
                age={message.age}
                email={message.email}
            />}
            {message.type === 'row' &&
            <button
                className="modal-message-button"
                onClick={() => {
                    deleteRow(message.id);
                    onCloseModal();
                }}
            >
                    Удалить
            </button>
            }
        </div>
    </div>
);

Modal.propTypes = {
    message: PropTypes.object,
    onCloseModal: PropTypes.func.isRequired,
    deleteRow: PropTypes.func.isRequired
};

Modal.defaultProps = {
    message: {}
};

export default Modal;
