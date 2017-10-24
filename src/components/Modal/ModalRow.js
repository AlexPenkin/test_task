import React, {Component} from 'react';
import Net from '../../net/net';
import './Modal.css';

import { url } from '../App/App';

class ModalRow extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    onChange(name, value) {
        this.setState(() => ({ [name]: value }));
    }

    render() {
        const {
            firstName,
            lastName,
            age,
            email,
            onCloseModal,
            updateData,
            deleteRow
        } = this.state;
        return (
            <div className="modal-message-box-row">
                <span className="modal-message-box-row-firstName">
                    <span className="modal-message-box-row-name">Имя:</span>
                    <input
                        value={firstName}
                        onChange={(e) => {
                            this.onChange('firstName', e.target.value);
                        }}
                        className="modal-message-box-row-value"
                    />
                </span>
                <span className="modal-message-box-row-lastName">
                    <span className="modal-message-box-row-name">Фамилия:</span>
                    <input
                        value={lastName}
                        onChange={(e) => {
                            this.onChange('lastName', e.target.value);
                        }}
                        className="modal-message-box-row-value"
                    />
                </span>
                <span className="modal-message-box-row-age">
                    <span className="modal-message-box-row-name">Возраст:</span>
                    <input
                        value={age}
                        onChange={(e) => {
                            this.onChange('age', e.target.value);
                        }}
                        className="modal-message-box-row-value"
                    />
                </span>
                <span className="modal-message-box-row-email">
                    <span className="modal-message-box-row-name">Почта:</span>
                    <input
                        value={email}
                        onChange={(e) => {
                            this.onChange('email', e.target.value);
                        }}
                        className="modal-message-box-row-value"
                    />
                </span>
                <button
                    className="modal-message-button-delete"
                    onClick={() => {
                        deleteRow(this.state.id);
                        onCloseModal();
                    }}
                >
                    Удалить
                </button>
                <button
                    className="modal-message-button-edit"
                    onClick={() => {
                        const user = this.state;
                        delete user.updateData;
                        delete user.onCloseModal;
                        delete user.deleteRow;
                        Net.patch(url, user).then((data) => {
                            updateData(data);
                            onCloseModal();
                        });
                    }
                    }
                >Сохранить
                </button>
            </div>
        );
    }
}

export default ModalRow;
