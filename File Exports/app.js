//module
console.log(module);

const greeting = require('./lib/greeting.js')
const average = require("./lib/school.js").average;
greeting();

console.log(average([10,20,30]));