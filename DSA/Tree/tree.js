class Node{
    constructor(data){
        this.data = data
        this.childrens = []
    }

    addChild(data){
        this.childrens.push(data)
    }
    toString(){
        return this.root
    }
}

class Tree{
    constructor(data){
        this.root = new Node(data)
    }
}


let tree = new Tree('Root')

let child_1 = new Node('child 1')
let child_2 = new Node('child 2')
let child_3 = new Node('child 3')
let child_4 = new Node('child 4')

tree.root.addChild(child_1)
tree.root.addChild(child_2)
tree.root.addChild(child_3)
tree.root.addChild(child_4)

const child5 = new Node('child 5')
const child6 = new Node('child 6')
const child7 = new Node('child 6')
const child8 = new Node('child 6')

child_2.addChild(child5)
child_2.addChild(child6)

child_4.addChild(child7)
child_4.addChild(child8)
