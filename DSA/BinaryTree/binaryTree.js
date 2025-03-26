class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(data){
        const newNode = new Node(data);

        if(!this.root){
            this.root = newNode;
            return
        }
        const queue = [this.root]

        while(queue.length > 0){
            let temp = queue.shift()
            if(!temp.left){
                temp.left = newNode
                return
            }else if(!temp.right){
                temp.right = newNode
                return
            }
            queue.push(temp.left, temp.right)
        }
    }

    inorder(node = this.root){
        if(!node) return
        this.inorder(node.left)
        console.log(node.data);
        this.inorder(node.right)
    }

}

let list = new BinaryTree()
list.insert(10)
list.insert(20)
list.insert(30)
list.insert(40)
list.insert(50)
list.insert(60)
list.inorder()