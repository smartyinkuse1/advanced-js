console.log("Welcome to Debugging!!!")

let myVariable = "Hello world!"
console.log(myVariable);
myVariable = 10

console.log(myVariable);

console.error("This is an error!")

console.warn('You"re not doing something right')

let num1 = 5;
let num2 = 10;

let result = num1 + num2;

console.log(result);

console.table([
    {
        name: 'Yinka',
        age: 30,
        description: "Lorem"
    },
    {
        name: 'Margo',
        age: 30,
        description: "Lorem"
    },
    {
        name: 'Siiri',
        age: 30,
        description: "Lorem"
    },
])

console.group('Grouped data');
    console.log("Value 1")
    console.log("Value 2")
    console.log("Value 3")
console.groupEnd('Grouped data')


console.time('for loop')
for (let i = 0; i < 50; i++) {
    console.log(i);
}
console.timeEnd('for loop')

console.assert( 5<10 , 'first number is not lesser than the second number');

console.clear()


const operations = (num1, num2, num3) => {
    return (num1 + num2) * num3
} 

result = operations(2, 5, 10)

console.log(result);

localStorage.setItem('age', 25)
localStorage.setItem('level', 'expert')

let level = localStorage.getItem('level')

console.log(level);



// let heading = document.getElementById("hello");

// heading.addEventListener("click", (event) => {
//     // console.log(event);
//     // console.log("You clicked on the heading");
// })

// let form = document.getElementById("someForm");
// console.log(form);

// let descriptionValue = localStorage.getItem('description');
// if (descriptionValue) {
//     document.getElementById("someH1").innerHTML = descriptionValue
// }

// form.addEventListener("submit", (event)=> {
//     event.preventDefault()
//     console.log(event);
//     let inputValue = event.target[0].value;
//     console.log(inputValue);
//     localStorage.setItem('description', inputValue);
// })


// 3-5 minutes survey.. 
//  Go to any web app(facebook, twitter, google)
// navigate to their dev tools tabs(element, console, Localstorage)

