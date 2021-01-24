// const calc = require('./12.utile');
// const { sum } = require('./12.utile');

// console.log( sum(10, 20) );
// console.log( calc.sum(10, 20) );
// console.log( calc.sub(100, 50) );

const http = require('http');
const os = require('os');
const fs = require('fs');
const moment = require('moment');
const _= require('lodash')

console.log(moment().format('YYYY-MM-DD hh:mm:ss'));

const arr = [1,3,5,2,7,11,9,8];
console.log(_.sortBy(arr));
console.log(_.shuffle(arr));

http.Server.listen(1000,'127.0.0.1') 