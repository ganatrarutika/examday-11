let str = "hello world";

function countVowels(str) {
    let vowels = 'aeiouAEIOU';  
    let count = 0;  
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;  
        }
    }
    
    return count;  
}

console.log(countVowels(str))
