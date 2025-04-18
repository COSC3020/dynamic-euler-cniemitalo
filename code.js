//code from lecture slides 
function factorial(n) {
    let fact = 1; 
    while (n > 1) {
        fact = fact * n; 
        n--; 
    }

    return fact; 
}

function e(n) {
    let oldEuler = 1; 
    let euler = 1; 
    let newEuler; 
    let v = 2; 

    while (n > 0) {
        newEuler = euler + oldEuler; 
        oldEuler = 1 / factorial(v); 
        euler = newEuler; 

        ++v; 
        --n; 
    }

    return euler; 
}
