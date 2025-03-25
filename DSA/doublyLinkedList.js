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

    insertAtEnd(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode;
            return
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }

    insertAtStart(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode
        this.head = newNode
    }

    deleteFromEnd(){
        if(!this.tail){
            return
        }
        let data = this.tail.value

        if(this.head == this.tail){
            this.tail = this.head = null
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null
        }
// returning deleted value
        return data
        
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