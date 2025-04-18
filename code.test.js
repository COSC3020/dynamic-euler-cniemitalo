const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(factorial(1) === 1); 
assert(factorial(5) === 120);  

assert(e(10) === 2.7182818011463845);
assert(e(1) === 2); 
assert(e(0) === 1); 
assert(e(20) === 2.7182818284590455); 
