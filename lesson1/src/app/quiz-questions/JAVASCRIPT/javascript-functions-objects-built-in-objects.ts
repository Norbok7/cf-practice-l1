export const JAVASCRIPT_FUNCTIONS_OBJECTS_BUILTIN_OBJECTS = [
  // Functions
  { id: 1, question: 'What is the result of calling the function learnToCode("Alice", "JavaScript")?', options: ['"Alice became a developer by learning with Codefi!"', '"Are you learning Front-End Development?"', '"Alice became a developer by learning JavaScript!"'], answer: '"Are you learning Front-End Development?"' },
  { id: 2, question: 'How would you call a function defined as `const greet = function() { console.log("Hello"); };`?', options: ['greet()', 'greet', 'greet.call()'], answer: 'greet()' },
  { id: 3, question: 'In the `gradeAssignment` function, what will `gradeAssignment(99)` return?', options: ['99', 'undefined', '0'], answer: '99' },
  { id: 4, question: 'What is the difference between a named function and an anonymous function in JavaScript?', options: ['Named functions can be called before they are declared', 'Anonymous functions can be used as arguments', 'Named functions cannot be used as arguments'], answer: 'Anonymous functions can be used as arguments' },

  // Objects
  { id: 5, question: 'What will `student.filterWord` log if `filterWord` is defined as `const filterWord = "name";`?', options: ['undefined', '"name"', 'Error'], answer: 'undefined' },
  { id: 6, question: 'How can you access the `age` property of the `student` object using bracket notation?', options: ['student["age"]', 'student.age', 'student.get("age")'], answer: 'student["age"]' },
  { id: 7, question: 'What will the `introduce` method return when called on the `student` object?', options: ['`I am Jamie`', '`Jamie`', '`undefined`'], answer: '`I am Jamie`' },
  { id: 8, question: 'How would you define a method within an object that accepts a parameter and uses it in a template literal?', options: ['Define the method as `function methodName(param) { return `value ${param}`; }`', 'Define the method as `methodName(param) => `value ${param}``', 'Define the method as `function methodName(param) { return "value " + param; }`'], answer: 'Define the method as `function methodName(param) { return `value ${param}`; }`' },

  // Built-in Objects
  { id: 9, question: 'What will `Math.floor(3.9)` return?', options: ['3', '4', '3.9'], answer: '3' },
  { id: 10, question: 'How can you transform the string "       TESTING methods       " to have no leading or trailing whitespace?', options: ['`myString.trim()`', '`myString.toLowerCase()`', '`myString.replace()`'], answer: '`myString.trim()`' },
  { id: 11, question: 'What does `Number.isInteger(3.14)` return?', options: ['false', 'true', 'undefined'], answer: 'false' },
  { id: 12, question: 'Which method will turn the number `10.2132130` into `10.21`?', options: ['`toFixed(2)`', '`toString()`', '`Math.round()`'], answer: '`toFixed(2)`' },
  { id: 13, question: 'What does `Date.now()` return?', options: ['Current timestamp in milliseconds', 'Current date in ISO string', 'Current date object'], answer: 'Current timestamp in milliseconds' },
  { id: 14, question: 'How do you access the title of the current document using JavaScript?', options: ['`document.title`', '`window.title`', '`document.getTitle()`'], answer: '`document.title`' },
  { id: 15, question: 'What is the output of `myArray.pop()` when `myArray = [1, "Hello", false, 20, true]`?', options: ['true', '20', '"Hello"', 'undefined'], answer: 'true' },
  { id: 16, question: 'How do you generate a random number between 0 (inclusive) and 1 (exclusive) in JavaScript?', options: ['`Math.random()`', '`Math.floor(Math.random())`', '`Math.ceil(Math.random())`'], answer: '`Math.random()`' },
  { id: 17, question: 'What will `document.querySelector("h1")` return?', options: ['The first `<h1>` element in the document', 'The last `<h1>` element in the document', 'A new `<h1>` element'], answer: 'The first `<h1>` element in the document' },
  { id: 18, question: 'Which method would you use to determine if a string starts with a specific substring?', options: ['`startsWith()`', '`indexOf()`', '`includes()`'], answer: '`startsWith()`' },
  { id: 19, question: 'What does `myArray.includes("Hello")` return for `myArray = [1, "Hello", false, 20, true]`?', options: ['true', 'false', 'undefined'], answer: 'true' },
  { id: 20, question: 'Which method will return the number of elements in an array?', options: ['`length`', '`size`', '`count`'], answer: '`length`' },
  { id: 21, question: 'What does `new Date().getMonth()` return?', options: ['The month of the year as a number (0-11)', 'The name of the month', 'The day of the month'], answer: 'The month of the year as a number (0-11)' },
  { id: 22, question: 'How would you remove a specific element from an array?', options: ['Use `splice()` method', 'Use `pop()` method', 'Use `shift()` method'], answer: 'Use `splice()` method' },
  { id: 23, question: 'What is the result of `myString.replace("methods", "complete")` when `myString = "TESTING methods"`?', options: ['"TESTING complete"', '"TESTING methods"', 'Error'], answer: '"TESTING complete"' },
  { id: 24, question: 'How would you get the current date as a string in ISO format?', options: ['`new Date().toISOString()`', '`Date.now()`', '`new Date().toDateString()`'], answer: '`new Date().toISOString()`' },
  { id: 25, question: 'What does `Math.max(2, 5, 1)` return?', options: ['5', '2', '1'], answer: '5' }
];
