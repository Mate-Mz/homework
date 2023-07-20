//addition
function sum(a, b){
    if(isNaN(Number(a))|| isNaN(Number(b))){
        alert("შეცდომა მატრიცაში");
    }
    else{
        let sum = Number(a)+Number(b);
        console.log(sum);
    }
}

sum(1,2)

//conversion from Fahrenheit to Celsius
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

//simple calculator

function operation(a, op, b){
  op = op.trim();
    if(isNaN(Number(a)) || isNaN(Number(b)|| op !== "+" || op !== "-" || op !== "*" || op !== "/")){
        alert("false");
    }
    switch (op) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
        default:
          console.log("false");
          return;
      }
      console.log(result);
}

// ("+" or "-" or "*"" or "/" 
operation(1, "+", 3);