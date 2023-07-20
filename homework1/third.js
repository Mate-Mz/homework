function operation(a, op, b){
    if(isNaN(Number(a)) || isNaN(Number(b))){
      console.log("false");
    }
    switch (op.trim()) {
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
operation(1,"+",2);