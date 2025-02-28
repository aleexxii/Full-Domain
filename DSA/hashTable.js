class HashTableLinearProbing{
    constructor(size = 7){
        this.table = new Array(size)
    }

    _hash(key){
        let hash = 0
        for(let char of key){
            hash = (hash + char.charCodeAt(0)) % this.table.length
        }
        return hash
    }

    set(key, value){
        let index = this._hash(key)
        while(this.table[index]){
            index = (index + 1) % this.table.length
        }
        this.table[index] = [key, value]
    }

    get(key){
        const index = this._hash(key)
        if(!this.table[index]) return undefined
        for(let [storedKey, value] of this.table){
            if(storedKey == index){
                return value
            }
        }
        return undefined
    }
}