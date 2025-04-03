class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class singlyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null
    }

    insertAtStart(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        newNode.next = this.head;
        this.head = newNode
    }
    insertAtEnd(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        this.tail.next = newNode
        this.tail = newNode
    }
}

class Node2{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    insertAtEnd(data){
        let newNode = new Node2(data)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode;
    }

    insertAtStart(data){
        let newNode = new Node2(data)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
            return
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }
}