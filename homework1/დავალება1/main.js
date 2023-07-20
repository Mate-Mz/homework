document.getElementById("btn").onclick = function(){
    let A = document.getElementById("numA").value;
    let B = document.getElementById("numB").value;
    if(isNaN(Number(A))|| isNaN(Number(B))){
        alert("შეცდომა მატრიცაში");
    }
    else{
        let sum = Number(A)+Number(B);
        console.log(sum);
        let resultText = document.getElementById("resultText");
        resultText.textContent = "sum = " + sum;
    }
}