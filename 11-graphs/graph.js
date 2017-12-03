function Graph(v) {
    this.verticies = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];

    for (var i = 0; i < this.verticies; ++i) {
        this.adj[i] = [];
        this.marked[i] = false;
    }

    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
}

function dfs(v) {
    this.marked[v] = true;
    if(this.adj[v] !== undefined) {
        console.log("Visted vertex: " + v);
    }
    for (var i = 0; i < this.adj[v].length; i++) {
        var w = this.adj[v][i];
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    var output;
    for (var i = 0; i < this.verticies; i++) {
        output += '\n' + i + " -> ";
        for (var j = 0; j < this.verticies; ++j) {
            if (this.adj[i][j] != undefined) {
                output += this.adj[i][j] + ' ';
            }
        }
    }
    console.log(output);
}

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0);