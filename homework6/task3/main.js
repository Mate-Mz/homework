const input = document.getElementById('input');
const submit = document.getElementById('averageBtn');
const answer = document.getElementById('text');

const splitInput = ()=> input.value.split(":");

const filterNumbers = (arr)=>{
    const numbersOnly = [];
    for (const element of arr) {
        if (!isNaN(Number(element))) {
            numbersOnly.push(element);
        }
    }
    return numbersOnly;
}

const calculateAverage = (numbersArray)=>{
    const totalNumbers = numbersArray.length;
    let sum = 0;
    numbersArray.forEach(element => {
      sum += Number(element);
    });
    return sum/totalNumbers;
}

submit.addEventListener("click", ()=>{
    answer.textContent= `average is: ${calculateAverage(filterNumbers(splitInput()))}`;
    console.log(splitInput());
    console.log(filterNumbers(splitInput()));
});