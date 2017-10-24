/* eslint-disable */

export const ageValidation = value => value && !isNaN(Number(value)) && value < 65;
export const emailValidation = value => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
export const lastNameValidation = value => value.length >= 3;
export const firstNameValidation = value => value.length >= 3;

/* eslint-disable */
