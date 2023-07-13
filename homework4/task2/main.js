const upper = (str, splitter) => {
    let result = "";
    const splitStr = str.trim().split(splitter);
    for(const word of splitStr){
        result += word[0].toUpperCase() + word.slice(1) + splitter;
    }

    return result;
}


let text = "all at once they saw by the stream a stranger sitting and weeping,\nholding a coal-black steed by a bridle studded with pearls.\nhe was clothed like a princely hero, but the youthful bloom of his cheeks\nwas frozen with glittering tears that welled from a grief-stricken heart."


console.log(upper(upper(text, ' '), '\n'));