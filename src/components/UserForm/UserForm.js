import React from 'react';
import PropTypes from 'prop-types';
import Net from '../../net/net';
import {url} from '../App/App';
import './UserForm.css';
import {ageValidation, emailValidation, firstNameValidation, lastNameValidation} from './validators';

const UserForm = ({
    updateData,
    handleForm,
    addMessage,
    firstName,
    lastName,
    age,
    email
}) => (
    <div className="user-form">
        <div className="user-form-input">
            <label htmlFor="firstName">
                <input
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => {
                        handleForm('firstName', e.target.value);
                    }}
                />
            Имя
            </label>
        </div>
        <div className="user-form-input">
            <label htmlFor="lastName">
                <input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => {
                        handleForm('lastName', e.target.value);
                    }}
                />
            Фамилия
            </label>
        </div>
        <div className="user-form-input">
            <label htmlFor="age">
                <input
                    id="age"
                    value={age}
                    onChange={(e) => {
                        handleForm('age', e.target.value);
                    }}
                />
            Возраст
            </label>
        </div>
        <div className="user-form-input">
            <label htmlFor="email">
                <input
                    id="email"
                    value={email}
                    onChange={(e) => {
                        handleForm('email', e.target.value);
                    }}
                />
            Email
            </label>
        </div>
        <div className="user-form-button">
            <button
                onClick={() => {
                    const message = {
                        title: 'Неправильно заполнена форма',
                        type: 'error'
                    };
                    let isValid = true;
                    if (!firstNameValidation(firstName)) {
                        addMessage({ ...message, name: 'Ошибка в поле Имя', message: 'Должно быть больше 3 символов' });
                        isValid = false;
                    }
                    if (!lastNameValidation(lastName)) {
                        addMessage({
                            ...message,
                            name: 'Ошибка в поле Фамилия',
                            message: 'Должно быть больше 3 символов'
                        });
                        isValid = false;
                    }
                    if (!ageValidation(age)) {
                        addMessage({
                            ...message,
                            name: 'Ошибка в поле Возраст',
                            message:
                             'Возраст должен быть не более 65 лет'
                        });
                        isValid = false;
                    }
                    if (!emailValidation(email)) {
                        addMessage({ ...message, name: 'Ошибка в поле Email', message: 'Email должен быть настоящим' });
                        isValid = false;
                    }

                    if (isValid) {
                        Net.put(url, {
                            firstName,
                            lastName,
                            age,
                            email
                        }).then((data) => {
                            updateData(data);
                            addMessage({
                                type: 'success', title: 'Успех', name: 'Успешно', message: 'Данные добавлены'
                            });
                        }).catch(() => addMessage({
                            ...message, title: 'Ошибка', name: 'Ошибка сети', message: 'Что то пошло не так'
                        }));
                    }
                }}
            >
                Создать
            </button>
        </div>
    </div>
);

UserForm.propTypes = {
    updateData: PropTypes.func.isRequired,
    handleForm: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default UserForm;
