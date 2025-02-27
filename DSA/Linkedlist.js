class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

/* It takes O(n) for time and O(1) for memory */
class SinglyLinkedList{
    constructor(){
        this.head = null;
    }

    /* Insert a new node at the end */
    append(value){
        const newNode = new Node(value)
        let current;
        if(!this.head){
            this.head = newNode
        }else{
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }

}


class SinglyLinkedList2{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    InsertAtEnd(element){
        const node = new Node(element)

        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node
        }
    }
}

function display (){
    let current = this.head;
    const result = []
    while(current){
        result.push(current.value)
        current = current.next
    }
    console.log(result.join('-> '));
}

const list1 = new SinglyLinkedList()
list1.append(10)
list1.append(20)
list1.append(30)
list1.append(40)
list1.append(50)

const list2 = new SinglyLinkedList2()
list2.InsertAtEnd(60)
list2.InsertAtEnd(70)
list2.InsertAtEnd(80)
list2.InsertAtEnd(90)
list2.InsertAtEnd(100)


/* Adding the display function to both class */
SinglyLinkedList.prototype.display = display
SinglyLinkedList2.prototype.display = display

list1.display()
list2.display()

