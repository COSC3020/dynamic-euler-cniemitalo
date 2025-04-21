const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+''); 

assert(e(10) === 2.7182818011463845);
assert(e(1) === 2); 
assert(e(0) === 1); 
assert(e(20) === 2.7182818284590455); 
