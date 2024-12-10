let arr = [1, 2, 3, 4, 5];

class Node {
    constructor(value) {
        this.value = value;  
        this.next = null;    
    }
}

function countNodes(head) {
    let count = 0;
    let current = head; 
    
    while (current !== null) {
        count++; 
        current = current.next;  
    }
    
    return count; 
}

function createLinkedList(arr) {
    let head = null;
    let current = null;

    for (let i = 0; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        
        if (head === null) {
            head = newNode; 
        } else {
            current.next = newNode; 
        }
        current = newNode; 
    }
}

let linkedListHead = createLinkedList(arr); 
let nodeCount = countNodes(linkedListHead); 

console.log("Total Nodes:", nodeCount);  

