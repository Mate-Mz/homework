document.getElementById("btn").onclick = function() {
    let temp = document.getElementById("initialTemp").value;
    let conversionType = document.getElementById("conversionType").value;
    let result;
    if(isNaN(Number(temp))){
        alert("false");
        document.getElementById("result").textContent = "false"
    }
     else if (conversionType === "celsius") {
      result = (temp - 32) * (5 / 9);
      document.getElementById("result").textContent = (temp + "F = " + result + "C")
    } else if (conversionType === "fahrenheit") {
      result = (temp * (9 / 5)) + 32;
      document.getElementById("result").textContent = (temp + "C = " + result + "F")
    }
};
