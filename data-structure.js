// examples --> (Array), Stack, Queue, List, Trees
// OOP

// let myArr = new Array(5);
let myArr = [];
myArr.push(1);
myArr.push(2);
// console.log(myArr.length);
// console.log(myArr);


// OOP --> Object Oriented Programming.

// Class --> Blueprint to how the object looks
// Object --> Instance of the class (basic have properties and can perform functions);

// car --> example
// es6
class Car {
  // Helps to declare and initialize the class properties..
  // let brand = "Benz";
  constructor(brand, model, year, mileage) {
     // this --> represent the a unique instance of the object in the class
     this.brand = brand;
     this.model = model;
     this.year = year;
     this.mileage = mileage
  }

  move() {
      return `This car is moving`
  }

  stop() {
      return  `This car has stopped`
  }

  setMileage(mileage) {
    this.mileage = mileage
  }

  getDescription() {
    return `This car is a ${this.brand} ${this.model}, manufactured in ${this.year} with ${this.mileage} mileage`;
  }

}

let car1 = new Car("Benz", "CLA", 2020, 1000);
let car2 = new Car("Toyota", "Venza", 2019, 500);

// console.log(car1, car2);

// console.log(car1.getDescription());

// we want to write a program that gets the Area and Perimeter of a Rectangle (Using OOP)

class Rectangle {
    // length
    // breadth
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    getArea() {
        return this.length * this.breadth;
    }

    getPerimeter() {
        return 2 * (this.length + this.breadth);
    }
}

let rect1 = new Rectangle(10,20);
let rect1Area = rect1.getArea();
let rect1Perimeter = rect1.getPerimeter();

console.log(rect1, rect1Area, rect1Perimeter);

// 1. Write a program to find the area and circumference of a Circle (Using OOP);
// 2. Write a program to find the area and perimeter of a Triangle<Isosceles> (using OOP); 2 sides equal.

// Implement a Stack;

class Stack {
    // storage = {}
    // count = 0
    constructor() {
        this.storage = {};
        this.count = 0;
    }

    push(value) {
        this.storage[this.count] = value; // { 0: value }
        this.count++ // this.count =  this.count + 1
    }

    pop() {
        if (this.count === 0) {
            return undefined
        }
        this.count-- // this.count = this.count - 1
        let element = this.storage[this.count]
        delete this.storage[this.count]
        return element
    }
    size() {
        return this.count;
    }

    peek() {
        return this.storage[this.count - 1]
    }
}

let myStack = new Stack();
myStack.push(10);
myStack.push(15);
myStack.push(20);
console.log(myStack);
let poppedValue = myStack.pop();
// console.log(poppedValue, myStack.peek(), myStack.size());

// A Palindrome (A string is the same when it's reversed) --> racecar

const palindromeChecker = (word) => {
    let wordStack = new Stack()
    let reversedWord = "";
    for(let i = 0; i < word.length; i++ ) {
        wordStack.push(word[i])
    }
    for(let i = 0; i < word.length; i++ ) {
        reversedWord += wordStack.pop()
    }
    if (reversedWord === word) {
        return `${word} is a palindrome`
    } else{
        return `${word} is not a palindrome`
    }
}

console.log(palindromeChecker("racecar"));

// Queue --> FIFO;

class Queue {
    // collection = []
    constructor() {
        this.collection = [];
    }
    // Adds element to the storage
    enqueue(value) {
        this.collection.push(value);
    }
    // Remove element from the front
    dequeue() {
        return this.collection.shift();
    }
    // Returns the element at bottom of the queue
    front() {
        return this.collection[0];
    }
    size() {
        return this.collection.length
    }
    isEmpty() {
        return this.collection.length === 0
    }
}

let myQueue = new Queue();
myQueue.enqueue("a");
myQueue.enqueue("b")
myQueue.enqueue("c")
myQueue.dequeue();
// console.log(myQueue, myQueue.isEmpty());

// PriorityQueue --> (Inheritance)

class PriorityQueue extends Queue {
    constructor() {
        super();
        this.collection = [] // [["a", 1], ["c", 2], ['b', 3]]
    }
    enqueue(value){ // ["d", 1]
        if (this.isEmpty()) { //We check if storage is empty
            this.collection.push(value) 
        } else {
            // Loop through our collection
            let added = false;
            
            for(let i = 0; i < this.collection.length; i++) {
                // Check for the priority
                if (value[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, value);
                    added = true;
                    break;
                }
            }
            // 
            if (!added) {
                this.collection.push(value);
            }
        }
    }
}

let myPQueue = new PriorityQueue();
myPQueue.enqueue(["A", 5]);
myPQueue.enqueue(["B", 3]);
myPQueue.enqueue(["C", 2]);
myPQueue.enqueue(["D", 3]);
myPQueue.dequeue()
myPQueue.dequeue()
console.log(myPQueue);

// let arr = [10, 15, 20, 30];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// ["a", 1]

// List

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class List {
    constructor(head=null) {
        this.head = head
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++
            node = node.next
        }
        return count;
    }
}


let node1 = new ListNode(10);
let node2 = new ListNode(20);
let node3 = new ListNode(30);
let node4 = new ListNode(40);

node1.next = node2;
node2.next = node3
node3.next = node4

let myList = new List(node1);
console.log(myList);
// node4.next = null





// let someObjLiteral = {
//     name: "SomeOBj"
// }

// someObjLiteral["age"] = 20
// delete someObjLiteral["name"]
// console.log(someObjLiteral);
