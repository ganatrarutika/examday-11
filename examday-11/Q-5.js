let arr = [1, 2, 3, 4, 5, 6];
let target = 4;

function Search(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return true;  
        }
        
        if (arr[mid] < target) {
            left = mid + 1;  
        } else {
            right = mid - 1; 
        }
    }
    return false;  
}

let result = Search(arr, target);
console.log(result ? "true" : "false");
