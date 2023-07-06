let user = {
    username: "johnDoe",
    info: {
        email:"johndoe@example.com",
        password: "john2000!"
    },
    age: 25,
}

function copy(obj){
    let userCopy = {};
 
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null){
            userCopy[key] = copy(obj[key]);
        }else{
            userCopy[key] = obj[key];
        }
    }

    return userCopy;
}

console.log(copy(user));
