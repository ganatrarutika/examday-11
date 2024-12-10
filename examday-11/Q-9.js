let str = "hello world";

function capitalize(str) {
    let result = '';  
    let capitalizeNext = true; 

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        if (currentChar === ' ') {
            result += currentChar;  
            capitalizeNext = true;  
        } else {
            if (capitalizeNext) {
                result += currentChar.toUpperCase();  
                capitalizeNext = false; 
            } else {
                result += currentChar.toLowerCase();  
            }
        }
    }

    return result;
}

console.log(capitalize(str));
