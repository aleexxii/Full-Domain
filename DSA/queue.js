class Queue{
    constructor(){
        this.items = {}
        this.frontIndex = 0
        this.rareIndex = 0
    }
    enqueue(value){
        this.items[this.rareIndex] = value
        this.rareIndex++
    }
    dequeue(){
        if(this.frontIndex == this.rareIndex) return 'Stack is empty'
        let removed_value = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return removed_value
    }
}