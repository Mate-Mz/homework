let user = {
    username: "johnDoe",
    info: {
        email:"johndoe@example.com",
        password: "john2000!",

    },
    age: 25,
}

const deepCopy = (obj) =>{
    const result = {};
    
    for(const key in obj){
        if(typeof obj[key] === 'object'){
            if(Array.isArray(obj[key])){
                result[key] = obj[key].map((el) => deepCopy(el))
            }else{
                result[key] = deepCopy(obj[key]);
            }
        }else{
            result[key]=obj[key];
        }
    }
    return result;
}

let user2 = deepCopy(user);
console.log(user2);