// Using Array Literal Syntax //

const Phones = ["iPhone", "Pixel", "Samsung"];

// Usng Array Constructor // 

const numbers = new Array (1, 2, 3, 4);

console.log (numbers);

console.log (Phones);

// Accessing Object Elements //

const colors = ["Orange", "Blue", "Green", "Red"]

console.log(colors[3])

// Modifying Object Elements //

colors[1] = "Black"

console.log (colors)

console.log (colors.length)

delete colors[2]

console.log (colors)



const nums = [1, 2, 3]

const squares = nums.map (x => x ** 2)

console.log (squares)

const scores = [50, 30, 40, 80, 90]

const addition = scores.reduce ((sum, current) => sum + current, 0)

console.log (addition)

const take1 = [1, 2, 3, 4]
const take2 = [5, 6, 7, 8]

const merge = take1.concat(take2)

console.log (merge)

const slice = [1, 2, 3, 4]

const copy = slice.slice([2])

console.log (copy)

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
  console.log( index, fruit);
});

const digits = [100, 2, 50, 20, 5];

numbers.sort((a, b) => a - b);
console.log(numbers);

const findNumber = [10, 20, 30, 40, 50];

const found = findNumber.find(num => num > 25);
console.log(found);

const index = findNumber.findIndex(num => num > 25);
console.log(index)

console.log(findNumber.includes(20)); 
console.log(findNumber.includes(99));

console.log(Array.isArray([1, 2, 3]));       
console.log(Array.isArray("hello"));        
console.log(Array.isArray({ a: 1 }));        
console.log(Array.isArray(null));            
console.log(Array.isArray(undefined));     
console.log(Array.isArray(new Array(5)));    

const dNumbers = [10, 20, 30, 40, 50];

const [first, second] = dNumbers;
console.log(first); 
console.log(second);


const [, , third] = dNumbers;
console.log(third);

const [a, b, ...rest] = dNumbers;
console.log(a);    
console.log(b);  
console.log(rest); 


const students = [
  { name: "John", score: 85 },
  { name: "Mary", score: 72 },
  { name: "Peter", score: 40 },
  { name: "Grace", score: 91 },
  { name: "David", score: 58 }
];

const passedStudents = students.filter(student => student.score >= 50);
console.log(passedStudents);


const sortedStudents = [...passedStudents].sort((a, b) => b.score - a.score);
console.log(sortedStudents);

const messages = sortedStudents.map(s => `${s.name} passed with ${s.score}`);
console.log(messages);

const totalScore = students.reduce((sum, s) => sum + s.score, 0);
const average = totalScore / students.length;

console.log(average);