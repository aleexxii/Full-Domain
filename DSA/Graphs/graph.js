class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = []
    }

    addEdges(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }
}

let graph = new Graph()
graph.addVertex(40)
graph.addVertex(40)
graph.addVertex(40)