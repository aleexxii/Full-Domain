class Node {
  constructor() {
    this.childrens = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let current = this.root;

    for (let char of word) {
      if (!(char in current.childrens)) {
        current.childrens[char] = new Node();
      }
      current = current.childrens[char];
    }

    current.isWordEnd = true;
  }

  search(word){
    let current = this.root

    for (let char of word){
        if(!(char in current.childrens)){
            return false
        }
        current = current.childrens[char]
    }
    return current.isWordEnd
  }

  startsWithPrefix(prefix){
    let current = this.root

    for(let char of prefix){
        if(!(char in current.childrens)){
            return false
        }
        current = current.childrens[char]
    }
    return true
  }

}

let trie = new Trie();
trie.insert("display");
trie.insert("distance");

console.log(trie.search('dis'));

console.log(trie.startsWithPrefix('dis'));
