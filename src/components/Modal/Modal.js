import React from 'react';
import PropTypes from 'prop-types';
import ModalError from './ModalError';
import ModalRow from './ModalRow';
import './Modal.css';

const Modal = ({
    message, onCloseModal, deleteRow, updateData
}) => (
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
                id={message.id}
                updateData={updateData}
                onCloseModal={onCloseModal}
                deleteRow={deleteRow}
            />}
        </div>
    </div>
);

Modal.propTypes = {
    message: PropTypes.object,
    onCloseModal: PropTypes.func.isRequired,
    deleteRow: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired
};

Modal.defaultProps = {
    message: {}
};

export default Modal;
