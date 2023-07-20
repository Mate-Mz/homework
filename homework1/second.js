function conversion(Fahrenheit){
    if(isNaN(Number(Fahrenheit))){
        alert("შეცდომა მატრიცაში");
    }
    else{
        let Celsius = (Fahrenheit - 32) * 5/9;
        console.log(Celsius);
    }
}

conversion(123)