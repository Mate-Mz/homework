let user = [
    {name: "Temo", age: 25},
    {name: "Lasha", age: 21} 
];

function findYoungest(array){
    youngest = array[0];
    for(let person of array){
        if(youngest.age>person.age){
            youngest = person
        }
    }
    return youngest.name;
}
console.log(`The youngest is ${findYoungest(user)}`);