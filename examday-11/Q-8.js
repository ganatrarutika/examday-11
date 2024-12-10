let str = "A man, a plan, a canal: Panama";

function isPalindrome(str) {
 
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let reversedStr = cleanedStr.split('').reverse().join('');
 
    return cleanedStr === reversedStr;
}

console.log(isPalindrome(str))
