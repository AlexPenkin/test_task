import Modal from './Modal';


const propsError = {
    message: {
        title: 'Ошибка',
        type: 'error',
        name: 'testName',
        message: 'testMes'
    },
    onCloseModal: jest.fn(),
    deleteRow: jest.fn()
};
const propsSucsess = {
    message: {
        title: 'Успех',
        type: 'success',
        name: 'testName',
        message: 'testMes'
    },
    onCloseModal: jest.fn(),
    deleteRow: jest.fn()
};
const propsRow = {
    message: {
        title: 'Row',
        type: 'row',
        name: 'testName',
        message: 'testMes',
        firstName: 'Ala',
        lastName: 'Bala',
        email: 'aaA@ssad.ru',
        age: '20'
    },
    onCloseModal: jest.fn(),
    deleteRow: jest.fn()
};

it('does showing props in error box', () => {
    const wrapperWithError = mount(<Modal {...propsError} />);
    expect(wrapperWithError.find('.modal-message-box-error-name').at(0).text()).toEqual(`${propsError.message.name}: `);
    expect(wrapperWithError.find('.modal-message-box-error-message').at(0).text()).toEqual(propsError.message.message);
});

it('does showing props in row box', () => {
    const wrapperWithRow = mount(<Modal {...propsRow} />);
    expect(wrapperWithRow.find('.modal-message-box-row-value').at(0).text()).toEqual(propsRow.message.firstName);
    expect(wrapperWithRow.find('.modal-message-box-row-value').at(1).text()).toEqual(propsRow.message.lastName);
    expect(wrapperWithRow.find('.modal-message-box-row-value').at(2).text()).toBe(`${propsRow.message.age}`);
    expect(wrapperWithRow.find('.modal-message-box-row-value').at(3).text()).toEqual(propsRow.message.email);
    wrapperWithRow.find('.modal-message-button').simulate('click');
    wrapperWithRow.find('.modal-message-button').simulate('click');
    expect(propsRow.deleteRow.mock.calls.length).toEqual(2);
    expect(propsRow.onCloseModal.mock.calls.length).toEqual(2);
});
it('does showing props in succsess box', () => {
    const wrapperWithSuccsess = mount(<Modal {...propsSucsess} />);
    expect(wrapperWithSuccsess.find('.modal-message-box-error-name').at(0).text()).toEqual(`${propsSucsess.message.name}: `);
    expect(wrapperWithSuccsess.find('.modal-message-box-error-message').at(0).text()).toEqual(propsSucsess.message.message);
});
