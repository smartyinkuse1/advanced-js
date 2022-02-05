console.log("Welcome to algorithm!!!");

// Algorithm to return the greater from two numbers

const greaterNumber = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

// 10, 50
let result = greaterNumber(10, 50);


// Algorithm to find the greatest number among three numbers.

// Steps 
// compare first and second number 
// if first number is greater, compare with the last number .
// if first number is also greater than the third --> first number is the greatest number; else third is the greatest
// else -> second number is greater, compare with the last number.
// if second number is greater than than the third --> second number is the greatest number; else third is the greatest

const greatestInThree = (num1, num2, num3) => {
    if (num1 > num2) {
        if(num1 > num3){
            return `${num1} is the greatest`
        }else {
            return `${num3} is the the greatest`
        }
    } else {
        if (num2 > num3) {
            return `${num2} is the greatest`
        } else {
            return `${num3} is the greatest`
        }
    }
}

result = greatestInThree(120,1000,200)
// console.log(result);

// Control Structure || Conditional structures
// IFs(Comparism), Loops(Arrays, Objects);

// ForLoops-->(Arrays)

// Know the difference between an index(position) and a value  
// Index of an array starts from 0
// Last index of an array will always the array's length - 1

const arr1 = [ 'Hello', 'world', 'be', 'cool' ] // 4
// console.log(arr1[1]);


//Traversing of an array;
for(let i = 0; i < arr1.length; i++) {
    let value = arr1[i]; 
    // console.log(value);
    //Do something
}

// break - to stop the forloop
// continue - to skip a particular 

for(let i = 0; i < arr1.length; i++) {
    let value = arr1[i]; 
    if (i === 2) {
        break;
    }
    // console.log(value);
}

// Traversing in the reverse order
for(let i = arr1.length -1; i>=0;  i--) {
    let value = arr1[i]; 
    console.log(value);
}

for(let i = 1; i < 101; i=i+1) {
    // console.log(i);
}

// Class exercise 
// Algorithm to print all factors of 4 between 1 - 100;
// modulos in javascript.

for(let i = 1; i < 101; i++) {
    if (i%4 === 0) {
        // console.log(i);
    }
}

for(let i = 0; i <101; i = i+4) {
    if (i === 0) {
        continue;
    }
    // console.log(i);
}


// Class
// Algorithm to find sum of all numbers in this array,
// isNaN();
let arr = [ 10, 15, "Solid", 50, true, 150, false];


// totalSum = 0;
// Traversing --> Looping through the arrray;
// check if the element is a number, -->  accumulate element to the total sum;

const sumDigitArray = (array) => {
    let total = 0;

    for(let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            total = total + array[i]
        }
    }

    return total
}

result = sumDigitArray(arr)
console.log(result);


// Sorting and Searching algorithm

// Sorting Algorithm
// Bubble sort, Insertion sort, Selection Sort

// Searching Algorithm
// Linear search and Binary Search

// [ 10, 8, 100, 23, 4 11, 2]


// Bubble sort --> Compares adjacent elements then moves the greatest element to the right
// 10,8,100,23,4,11,2
// 8,10,100,23,4,11,2
// 8,10,23,100,4,11,2
// 8,10,23,4,100,11,2
// 8,10,23,4,11,100,2
// 8,10,23,4,11,2,100


// 8,10,23,4,11,2,100
// 8,10,4,23,11,2,100
// 8,10,4,11,23,2,100
// 8,10,4,11,2,23,100


// 8,10,4,11,2,23,100
// 8,4,10,2,11,23,100


// 8,4,10,2,11,23,100
// 4,8,10,2,11,23,100
// 4,8,2,10,11,23,100


// 4,8,2,10,11,23,100
// 4,2,8,10,11,23,100

// 4,2,8,10,11,23,100

// 2,4,8,10,11,23,100


// Insertion sort -->  Assume our first is the least element, build a sorted array comparing the remaining elements

// [ 10, 8, 100, 23, 4 11, 2]

// [2, 4, 8, 10, 11, 23, 100] 


// Selection sort --> Selects the minimun value in the list, Compare with the value, swap
// [ 10, 8, 100, 23, 4 11, 2]
// [2, 10, 8, 100, 23, 11]
// [2, 4, 8, 10, 100, 23, 11]
// [2, 4, 8, 10, 11, 23, 100]


// Searching Algorithms --> Get the position of a certain value in our array.

//[ 10, 8, 100, 23, 4 11, 2]  11 ==> 5

// Linear search --> traverse and compare the search term with all of the element
// Binary search --> sort the array, Divide the array, compare the search term with the middle element.

// [ 10, 8, 100, 23, 4 11, 2]
// [2, 4, 8, [10, 11, 23, 100]


// Nested Loops

// for(let i = 0; i < 10; i++ ) {
//     console.log("OUTER LOOP",i);
//     for(let j = 0; j < 5; j++) {
//         console.log("inner loop", j);
//     }
// }


// Swapping of values
let a  = 10;
let b = 20;
console.log(a,b);

// Swap
let temp = a;
a = b;
b = temp;
console.log(a,b);


// Bubble Sort

// [ 10, 8, 100, 23, 4 11, 2]
const bubbleSort = (array) => {
    console.log(array);
    for(let i = 0; i < array.length - 1; i++) {
        console.log("Outer",i);
        for(j = 0; j < array.length - 1 - i; j++) {
            console.log(j,array[j], array[j+1]);
            if(array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            console.log(array);
        }
    }
    array
} 

console.log(bubbleSort([ 10, 8, 100, 23, 4, 11, 2]));



// Binary Search 
const binarySearch = (array, elem) => {
    let startIndex = 0;
    let endIndex = array.length - 1
    let middleIndex = Math.floor((startIndex + endIndex) / 2)

    //Stop the loop if the middle index is the search term and if the startIndex is lessthan or equal to the endIndex
    while(array[middleIndex] !== elem && startIndex <= endIndex) {
        if (array[middleIndex] < elem ) {
            startIndex = middleIndex + 1
        }else {
            endIndex = middleIndex - 1
        }
        middleIndex = Math.floor((startIndex + endIndex) / 2)
    }
    return array[middleIndex] === elem ? middleIndex : -1; // if (rray[middleIndex] === elem) {return middleIndex} else {return -1}

}

const largeArray = [ 10, 17, 18, 19, 22, 28, 29, 60, 100, 222 ]
console.log(binarySearch(largeArray, 22 ));
