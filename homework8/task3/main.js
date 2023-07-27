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


function asyncDeepCopy(obj){
    return new Promise((resolve, reject) => {
        if(typeof obj!== 'object'){
            reject ("parameter is not an object");
        }else{
            const copiedObj = deepCopy(obj);
            resolve(copiedObj);
        }
    })
}


const originalObject = {
    key: 'value',
    nested: {
          name: 'James',
        },
    };

 asyncDeepCopy("originalObject")
    .then( copiedObject => console.log(copiedObject))
    .catch( err => console.error(`Error: ${err.message}`));