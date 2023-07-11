const calculations = (...args) => {
    let sum = args[0] + args[1];
    let product = 1;
    for (let i = 2; i < args.length; i++) {
        product *= args[i];
    }
    return [sum, product];
}

console.log(calculations(1, 2, 3, 4));