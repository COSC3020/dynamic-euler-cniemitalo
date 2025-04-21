function e(n) {
    let euler = 1; 
    let factorial = 1;  
    let v = 1; 

    while (v <= n) {
        factorial = factorial * v; 
        euler = euler + (1 / factorial); 
        v++; 
    }
    
    return euler; 
}
