const replaceString = (string, replaceVal, replaceWithVal) => {
    let newString;
    const startIndex = string.indexOf(replaceVal);
    if(startIndex != -1){
        const endIndex = startIndex + replaceVal.length;
        newString = string.slice(0, startIndex) + replaceWithVal + string.slice(endIndex);
        return newString;
    }
    else{
        return "invalid";
    }
}

console.log(replaceString("hello world", "world", "universe"));