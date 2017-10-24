/* elsint-disable */
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
global.React = require('react');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

global.mount = Enzyme.mount;
global.shallow = Enzyme.shallow;

/* elsint-disable */
