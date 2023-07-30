const validator = require('validator');

const email1 = "test@test.com";
const email2 = "abcDE123";

console.log(`"${email1}" is a valid email: ${validator.isEmail(email1)}`);
console.log(`"${email2}" is a valid email: ${validator.isEmail(email2)}`);
