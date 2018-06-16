class PriorityQueue {
    constructor() {
        this.storage = [];
        this.count = 0;
    }
    enqueue(element) {
        if (this.isEmpty()) {
            console.log('1')
            this.storage.push(element)
            this.count++
        } else {
            let added = false;
            for (let i = 0; i < this.storage.length; i++) {
                if (element[1] < this.storage[i][1]) {
                    this.storage.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.storage.push(element);
            }
            console.log('2')
            this.count++;
        }
    }
    dequeue() {
        const value = this.storage.shift();
        return value[0]; //if u want only value not priority
    }
    printCollection() {
        console.log("this.storage", this.storage);
        return this.storage;
    }
    front() {
        return this.storage[0];
    }
    size() {
        return this.count();
    }
    isEmpty() {
        return (this.storage.length === 0);
    }

}



var pq = new PriorityQueue();
pq.enqueue(["chandrashekar", 2]);
pq.enqueue(["rakesh", 2]);
pq.enqueue(["chandru", 1]);
pq.enqueue(["sai", 3])
pq.printCollection();
console.log(pq.dequeue());
console.log(pq.front());
pq.printCollection();