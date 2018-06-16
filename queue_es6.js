class Queue {
    constructor() {
        this.storage = [];
        this.count = 0;
    }
    enqueue(value) {
        this.storage.push(value);
        this.count++;
    }
    dequeue() {
        this.count--;
        return this.storage.shift();
    }
    front() {
        return this.storage[0];
    }
    size() {
        return count;
    }
    isEmpty() {
        return (this.storage.length === 0);
    }
    print() {
        console.log(`queue is ${this.storage}`);
        return this.storage;
    }
}

var queueObj = new Queue();
queueObj.enqueue("a");
queueObj.enqueue("a");
queueObj.enqueue("a");
queueObj.print();
queueObj.dequeue()
queueObj.print();