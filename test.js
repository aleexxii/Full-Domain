class Node1{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    insertAtEnd(value){
        const newNode = new Node1(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        this.tail.next = newNode
        this.tail = newNode
    }
    insertAtStart(value){
        const newNode = new Node1(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        newNode.next = this.head
        this.head = newNode
    }
}

class Node2{
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null
    }
    insertAtStart(value){
        const newNode = new Node2(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }
    insertAtEnd(value){
        const newNode = new Node2(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }
}