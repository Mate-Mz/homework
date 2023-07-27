function expo(num, power, callback){
    if(num === 0) return power === 0 ? undefined : 0;
    if(power === 0) return 1;
    if(power % 1 !== 0){
        const integerPart = Math.floor(power);
        const decimalPart = power - integerPart;
        const intValue = expo(num, integerPart, callback);
        const decimalValue = Math.pow(num, decimalPart);

        return callback(intValue, decimalValue).toFixed(3);
    }
    
    return callback(num, expo(num, power-1, callback));
}


callback = (a , b) => a * b

console.log(expo(2, 2, callback));