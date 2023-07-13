const fellowshipArray = [
    {name: "Frodo Baggins", age: 33},
    {name: "Samwise Gamgee", age: 38},
    {name: "Gandalf the Grey", age: "too old"},
    {name: "Aragorn son of Arathorn", age: 87},
    {name: "Legolas Greenleaf", age: 2931},
    {name: "Gimli son of Gloin", age: 140},
    {name: "Boromir son of Denethor", age: 41},
    {name: "Meriadoc Brandybuck", age: 36},
    {name: "Peregrin Took", age: 28}    
];

fellowshipArray.sort((a, b) => {
    if(a.age === "too old"){
        return 1;
    }
    if(b.age === "too old"){
        return -1;
    }
    return a.age - b.age;
});

console.log(fellowshipArray);