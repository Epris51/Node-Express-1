### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Callbacks: The most basic method for asynchronous operations. A function is passed as an argument to another function to be executed after the completion of an asynchronous operation.
Promises: These are objects representing the eventual completion or failure of an asynchronous operation. They can be chained and are more readable than callbacks.
Async/Await: A syntactic feature of JavaScript that allows you to write asynchronous code in a more synchronous-looking manner. It's essentially syntactic sugar over Promises.
Event Emitters: Used in Node.js, these allow you to subscribe to events and register functions that are called when an event occurs.

- What is a Promise?
A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected. Promises allow for cleaner, more manageable asynchronous code.

- What are the differences between an async function and a regular function?
Return Value: An async function always returns a Promise. A regular function can return any value.
Await Keyword: Within an async function, you can use the await keyword to pause the function execution until a Promise is resolved.
Error Handling: Async functions can use try-catch blocks for error handling, which makes handling errors in asynchronous code more intuitive.

- What is the difference between Node.js and Express.js?
Node.js: It's a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side.
Express.js: It's a framework that runs within Node.js, making it easier to build web applications and APIs. Express.js provides a layer of fundamental web application features, without obscuring Node.js features.

- What is the error-first callback pattern?
In Node.js, this pattern is used in callbacks. The first argument of the callback is reserved for an error object. If an error occurred, it will be passed as the first argument. If no error occurred, the first argument will be null or undefined.

- What is middleware?
Middleware in the context of web servers like Express.js is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware can execute code, modify the request and response objects, end the request-response cycle, or call the next middleware in the stack.

- What does the `next` function do?
In Express.js, next is a function that, when called, passes control to the next middleware function in the stack. If next is not called, the request-response cycle will halt.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
Performance: The code fetches user data sequentially, which is inefficient. It could use Promise.all to fetch data concurrently.
Error Handling: There's no error handling. If one of the getJSON calls fails, the entire function will fail without a proper mechanism to handle this.
Hardcoding: Usernames are hardcoded, which reduces flexibility. It would be better to pass these as arguments or fetch them from a configuration source.
Naming Conventions: Variable names like elie, joel, and matt are too specific and not descriptive of their purpose. It's better to use generic names like user1, user2, etc.
Return Order: The return array order does not match the fetching order. This could be intentional, but if not, it's an inconsistency.
