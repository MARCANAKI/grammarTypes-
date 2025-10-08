console.log(calculateArea(5, 10));

function calculateArea(width, height) {
  return width * height;
}

/* It is called Hoisting where functions can be called before they are decleared */

const isEven = function (number) {
  return number % 2 === 0;
};

console.log(isEven(4));

/* In this case if you call (isEven((4) before you define it, you'll get an error because
the function expression isn't hoisted */

const isEvens= function checkEvens(number) {
  if (number === 0) return true;
  if (number === 1) return false;
  return checkEvens(number - 2);
};

console.log(isEvens(6));

const isEvened = (number) => number % 2 === 0;
console.log(isEvened(3));



const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers)


/* It is good for the use of short calls backs and also doesn't require this to function or work*/

function createGreeting(name = "Valued Customer", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(createGreeting());
/* No Argument */ 

console.log(createGreeting("Alice"));
/* Name Argument */ 

console.log(createGreeting("Bob", "Welcome")); 
/* Name and Greetng Argument */


function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(10, 20));    
console.log(sumAll());       


function logDetails(id = 0, ...tags) {
  console.log("ID:", id);
  console.log("Tags:", tags);
}

logDetails();
logDetails(101, "urgent", "review", "approved"); 


function displayUserInfo({ firstName, lastName, age }) {
  console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`);
}

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

displayUserInfo(user);

/* Regular Functions have ther own this context while Arrow Functions inherit their from their surrounding scope */


const person = {
  name: "Alice",
  regular: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name); 
  }
};

person.regular();
person.arrow();




const double1 = n => n * 2;
console.log(double1(5));

/*  Arrow functions without {} do not require the return keyword, this is called Implicit return */



const double2 = n => { return n * 2; };
console.log(double2(5)); 

/* Arrow functions with {} require the return keyword, this is called Explicit return */







