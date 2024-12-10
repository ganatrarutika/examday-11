let arr = [2, 3, 4, 7, 8];

function count(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++; 
        }
    }
    
    return count;
}

console.log(count(arr)); 
