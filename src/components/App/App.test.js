import App from './App';

describe('App comonent', () => {
    it('renders app div', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find('.App').length).toEqual(1);
    });
    it('renders table', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find('.ReactTable').length).toEqual(1);
    });
    it('renders app div', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find('.user-form').length).toEqual(1);
    });
});
