import React, { Component } from 'react';
import Table from '../Table/Table';
import Net from '../../net/net';
import './App.css';
import UserForm from '../UserForm/UserForm';
import Modal from '../Modal/Modal';

export const url = '/data';
class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            messages: [
            ],
            firstName: '',
            lastName: '',
            age: '',
            email: ''
        };

        this.handleForm = this.handleForm.bind(this);
        this.updateData = this.updateData.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    componentDidMount() {
        Net.get(url).then(data =>
            this.setState(() => ({ data: [...data] }))).catch(() => this.addMessage({
            type: 'error', title: 'Ошибка', name: 'Ошибка сети', message: 'Что то пошло не так'
        }));
    }

    onCloseModal() {
        this.setState((prevState) => {
            const newMessages = [...prevState.messages];
            newMessages.shift();
            return { messages: newMessages };
        });
    }

    updateData(data) {
        this.setState(() => ({ data }));
    }

    addMessage(message) {
        this.setState((prevState) => {
            const newMessages = [...prevState.messages, message];
            return { messages: newMessages };
        });
    }

    deleteRow(id) {
        Net.delete(url, { id }).then((data) => {
            this.updateData(data);
        }).catch(() => this.addMessage({
            type: 'error', title: 'Ошибка', name: 'Ошибка сети', message: 'Что то пошло не так'
        }));
    }

    handleForm(formName, value) {
        this.setState(() => ({ [formName]: value }));
    }


    render() {
        return (
            <div className="App">
                {this.state.messages.length > 0 && <Modal
                    message={this.state.messages[0]}
                    onCloseModal={this.onCloseModal}
                    deleteRow={this.deleteRow}
                />}
                <Table
                    updateData={this.updateData}
                    data={this.state.data}
                    addMessage={this.addMessage}
                />
                <UserForm
                    handleForm={this.handleForm}
                    updateData={this.updateData}
                    addMessage={this.addMessage}
                    {...this.state}
                />
            </div>
        );
    }
}

export default App;
