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

  dfs(v, visited) {
    let visitedObj = {};
    console.log(this.adjList[v]);
    visitedObj[v] = true;
    for (let neighbor of this.adjList[v]) {
      // if (visited[neighbor]) this.dfs(neighbor, visitedObj);

      console.log(visited[neighbor]);
    }
  }

  bfs(v) {
    let q = [];
    let visited = [];
    visited.push(v);
    q.push(v);

    while (q.length > 0) {}
  }
}

const graf = new graph();

graf.addVertex("A");
graf.addVertex("B");
graf.addVertex("C");
graf.addVertex("D");

graf.addEdge("A", "B");
graf.addEdge("A", "C");
graf.addEdge("A", "D");

// graf.addEdge("A", "A");
// graf.removeEdge("A", "B");
// console.log("nigga", graf.checkEdge("A", "C"));

graf.dfs("A");

// graf.printGraph("A");
// console.log("====================================");
// console.log(graf);
// console.log("====================================");
