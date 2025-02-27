class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertAtEnd(element){
        const node = new Node(element)
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node
        }
    }
    insertAtStart(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode
            this.head = newNode
        }
    }

    display(){
        let current = this.head;
        const result = []
        while(current){
            result.push(current.value)
            current = current.next
        }
        console.log(result.join('->'));

    }
}

const list1 = new DoublyLinkedList()
list1.insertAtEnd(10)
list1.insertAtEnd(20)
list1.insertAtEnd(30)
list1.insertAtEnd(40)
list1.insertAtStart(50)
list1.display()