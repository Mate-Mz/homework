function sum(a, b){
    if(isNaN(Number(a))|| isNaN(Number(b))){
        alert("შეცდომა მატრიცაში");
    }
    else{
        let sum = Number(a)+Number(b);
        console.log(sum);
    }
}