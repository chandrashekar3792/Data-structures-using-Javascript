
class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.count=0;
        this.head=null;
    }
    size(){
        return this.count;
    }
    add(element) {
        let node=new Node(element);
        if(!this.head){
            this.head=node;
        }else{
            let currentNode=this.head;
            while (currentNode.next){
                currentNode=currentNode.next;
            }
            currentNode.next=node;
        }
        this.count++;  
    }
    remove(element){
        var currentNode=this.head;
        var previousNode;
        if(currentNode.element===element){
            head=currentNode.next;
        }else{
            while(currentNode.element!=element){
                previousNode=currentNode;
                currentNode=currentNode.next;
            }
            previousNode.next=currentNode.next;
        }
        this.count--;
    }
    isEmpty(){
        return this.count===0;
    }
    indexOf(element){
        var currentNode=this.head;
        var index=-1;
        while (currentNode) {
            index++;
            if(currentNode.element===element){
                return index;
            }
            currentNode=currentNode.next;
        }
        return -1;
    }
    elementAt(index){
        var currentNode=this.head;
        var length=0;
        while (length < index) {
            length++;
            currentNode=currentNode.next;
        }
        return currentNode.element;
    } 
    addAt(index=0,element){
        var node= new Node();
        var currentNode=this.head;
        var previousNode;
        var currentIndex=0;
        if(index>this.count){
            return false;
        }
        if(index===0){
            node.next=currentNode;
            this.head=node;
        }else{
            while(currentIndex<index){
                currentIndex++;
                previousNode=currentNode;
                currentNode=currentNode.next;
            }
            node.next=currentNode;
            previousNode.next=node;
        }
        this.count++;
    }
    removeAt(index=0){
        var currentNode = this.head;
        var previousNode;
        var currentIndex = 0;
        if (index<0 ||index > this.count) {
            return false;
        }
        if (index === 0) {
            this.head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.count--;
        return currentNode.element;
    }
    print(){
        return JSON.stringify(this.head);
    }

}

var list= new LinkedList();
list.add("head");
list.add("node");
list.add("count");
list.add("next");
list.add("tail");
console.log(list.size())
list.remove("node")
console.log(list.removeAt(1))
console.log(list.elementAt(2))
console.log(list.indexOf("tail"))
console.log(list.size())
console.log(list.print())


