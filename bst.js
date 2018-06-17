class Node{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

class BST{
    constructor(){
        this.root=null;
    }
    searchTree(node, data) {
        if(data<node.data){
            if(!node.left){
                node.left=new Node(data);
                return;
            }else if(node.left){
                return this.searchTree(node.left, data)
            }
        }else if(data>node.data){
            if(!node.right){
                node.right=new Node(data);
                return;
            }else if(data.right){
                return this.searchTree(node.right,data);
            }
        }else{
            return null;
        }
    }
    add(data){
        let node=this.root;
        if(!this.root){
            this.root = new Node(data);
            return;
        }else{
            return this.searchTree(node,data)
        }
    }
    findMin(){
        let current=this.root;
        while(current.left){
            current=current.left;
        }
        return current.data; 
    }
    findMax(){
        let current=this.root;
        while(current.right){
            current=current.right;
        }
        return current.data;
    }
    find(data) {
        let current =this.root;
        while(current.data!==data){
            if(data<current.data){
                current=current.left;
            }else {
                current=current.right;
            }
            if(!current){
                return null;
            }
        }
        return current;
    }
    isPresent(data){
        let current=this.root;
        while (current) {
            
            if(data==current.data){
                return true;
            } else if (data < current.left) {
                current=current.left;
            }else{
                current=current.right;
            }
        }
        return false;
    }
    removeNode(node,data){
        if(!node){
            return null;
        }
        if(data==node.data){
            //node has no childrens
            if(!node.left&& !node.right){
                return null;
            }
            //node has no left child
            if (!node.left){
                return node.right;
            }
            //node has no right child
            if(!node.right){
                return node.left;
            }
            //node has two childrens
            var tempNode=node.right;
            while(tempNode.left){
                tempNode=tempNode.left;
            }
            node.data=tempNode.data;
            node.right=this.removeNode(node.right,tempNode.data);
            return node;
        }else if(data<node.data){
            node.left=this.removeNode(node.left,data);
            return node;
        }else{
            node.right=this.removeNode(node.right,data);
            return node;
        }
    }
    remove(data){
        this.root=this.removeNode(this.root,data);
        console.log("this.root",JSON.stringify(this.root))
    }
}

const bst= new BST();
bst.add(4)
bst.add(2)
bst.add(3)
bst.add(1)
bst.remove(4);
console.log(bst.findMax())
console.log(bst.findMin())
console.log(bst.isPresent(4))