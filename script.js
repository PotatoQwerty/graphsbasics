class graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    if (this.adjList[v]) throw new Error("Vertex already exists");
    this.adjList[v] = [];
  }

  addEdge(v, e) {
    if (v === e) return;
    if (this.adjList[v].includes(e))
      throw new Error("This edge already exists");
    if (this.adjList[v] && this.adjList[e]) {
      this.adjList[v].push(e);
      this.adjList[e].push(v);
    } else throw new Error("There is missing edges");
  }

  removeEdge(v, e) {
    if (this.adjList[v].includes(e)) {
      if (this.adjList[v] && this.adjList[e]) {
        this.adjList[v] = this.adjList[v].filter((x) => x !== e);
        this.adjList[e] = this.adjList[e].filter((x) => x !== v);
      }
    }
  }

  checkEdge(v, e) {
    if (this.adjList[v]) return this.adjList[v].includes(e);
    else return false;
  }

  printGraph(v) {
    console.log(
      `Printing the graph for ${v}\n ${v}: ${this.adjList[v].map((x) => x)}`,
    );
  }

  dfs(v, visited = {}) {
    if (!this.adjList[v]) return;
    visited[v] = true;
    console.log(v);

    for (let neighbor of this.adjList[v]) {
      if (!visited[neighbor]) this.dfs(neighbor, visited);
    }
  }

  bfs(v) {
    if (!this.adjList[v]) return;
    let q = [];

    let visited = {};

    visited[v] = true;
    q.push(v);

    while (q.length > 0) {
      let current = q.shift();
      console.log(current);

      for (const neighbor of this.adjList[current]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          q.push(neighbor);
        }
      }
    }
  }
}

const myGraph = new graph();

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("A", "D");

// myGraph.addEdge("A", "A");

// myGraph.dfs("A");

myGraph.bfs("A");

// myGraph.printGraph("A");
// console.log("====================================");
// console.log(myGraph);
// console.log("====================================");
