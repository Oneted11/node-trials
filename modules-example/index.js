// const a = require("./module_a");
// console.log(a.name);
// console.log(a.data);
// console.log(a.privateVariable); //undefined, its not exported
// console.log(a.getPrivate()); //5 only way to get the variable

const Person = require('./person')
const john = new Person('john')
john.talk()