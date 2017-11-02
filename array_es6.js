//Array is a complex data type. used save similar data.

/*
javascript class with name ArrayClass
contains an constructor and functions
*/
class ArrayClass{
//constructor
	constructor(){
		this.array=[];
	}

	//function add to insert element into array
	add(element){
		this.array.push(element);
	}

	//function to remove an element from array
	remove(element){
		this.array=this.array.filter(currentElement=> currentElement!==element);
	}

	//search an element in array
	search(element){
		const foundIndex=this.array.indexOf(element);
		if(~foundIndex){
			return foundIndex;
		}
		return null;
	}

	//get element from array of particular index
	getAtIndex(index){
		return this.array[index];
	}

	//get length of array
	length(){
		return this.array.length;
	}

	//print whole array
	print(){
		console.log(this.array.join(''));
	}
}

const array= new ArrayClass();
array.add(1);
array.add(2);
array.add(3);
array.add(4);
array.add(5);
array.print();//1,2,3,4,5
console.log('search 3 gives index of 2:',array.search(3));
console.log('get Element at index 2:',array.getAtIndex(2));
console.log('Array length:',array.length());
array.remove(3);
array.print();