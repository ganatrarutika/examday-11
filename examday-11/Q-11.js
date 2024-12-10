
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

function section(arr1, arr2) {
    const set1 = new Set(arr1);  
    const intersection = [];

    for (let item of arr2) {
        if (set1.has(item)) {
            intersection.push(item);  
        }
    }
   return intersection;
}
console.log(section(arr1, arr2));  
