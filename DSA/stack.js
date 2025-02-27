class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        this.items.pop()
    }

    top(){
        if(this.items.length == 0) return '[]'
        return this.items[this.items.length - 1]
    }
    print(){
        return this.items.join('->')
    }

}

/* With object */

class Stack2 {
    constructor(){
        this.items = {}
        this.count = 0
    }

    push(value){
        this.items[this.count] = value
        this.count++
    }

    pop(){
        if(this.count == 0) return 'Stack is empty'
        this.count--
        let deleted_element = this.items[this.count]
        delete this.items[this.count]
        return deleted_element
    }
    display(){
        return this.items
    }
}


/* Stack with Linked list */

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack3 {
    constructor(){
        this.top = null;
        this.size = 0
    }

    push(value){
        const newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
        this.size++
    }
    pop(){
        let popped_value = this.top.value
        this.top = this.top.next
        this.size--
        return popped_value
    }
}

let list = new Stack2()
list.push(30)
list.push(40)
list.push(50)
list.push(60)
console.log(list.display());