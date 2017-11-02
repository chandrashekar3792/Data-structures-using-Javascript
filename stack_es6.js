/*
Stack is a complex data structure
Where last element which is inserted is the first to be remove
LIFO(Last in First out)
*/
class Stack{
	//initialize contructor
	constructor(){
		this.stack=[];
	}

	//inserting element into top of the stack
	push(item){
		this.stack.push(item)
	}

	//remove top element from stack
	pop(){
		this.stack.pop();
	}

	//print top element from stack
	peek(){
		return this.stack[this.stack.length-1];
	}

	//print length of stack
	length(){
		return this.stack.length;
	}

	//Printing the stack
	print(){
		console.log(this.stack.join(' '));
	}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // => 1 2 3
console.log('length is 3:', stack.length()); // => 3
console.log('peek is 3:', stack.peek()); // => 3
console.log('pop is 3:', stack.pop()); // => 3
stack.print(); // => 1 2
console.log('pop is 2:', stack.pop());  // => 2
console.log('length is 1:', stack.length()); // => 1
console.log('pop is 1:', stack.pop()); // => 1
stack.print(); // => ''
console.log('peek is undefined:', stack.peek()); // => undefined
console.log('pop is undefined:', stack.pop()); // => undefined
