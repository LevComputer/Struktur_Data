var stack = [];
stack.push(3); // stack is now [3]
stack.push(6); // stack is now [3, 6]
stack.push(9); // stack is now [3, 6, 9]
var i = stack.pop(); // stack is now [3, 6]
var i = stack.pop(); // stack is now [3]
console.log(stack);

var queue = [];
queue.push(3); // queue is now [3]
queue.push(6); // queue is now [3, 6]
queue.push(9); // queue is now [3, 6, 9]
var i = queue.shift(); // queue is now [6, 9]
var i = queue.shift(); // queue is now [9]
console.log(queue);
