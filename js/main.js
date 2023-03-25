let g = new Graph();
console.log(g);
// g.Edge.style.directed = true;

let result = [[[0, 0], [1, 1], [1, 1]], [[0, 0], [1, 0], [1, 2]], [[0, 0], [0, 1], [2, 1]], [[0, 0], [0, 0], [2, 2]], [[0, 1], [1, 1], [1, 2]], [[0, 1], [1, 0], [1, 0]], [[0, 1], [0, 1], [2, 2]], [[0, 1], [0, 0], [2, 0]], [[0, 2], [1, 1], [1, 0]], [[0, 2], [1, 0], [1, 1]], [[0, 2], [0, 1], [2, 0]], [[0, 2], [0, 0], [2, 1]], [[1, 0], [1, 1], [2, 1]], [[1, 0], [1, 0], [2, 2]], [[1, 0], [0, 1], [0, 1]], [[1, 0], [0, 0], [0, 2]], [[1, 1], [1, 1], [2, 2]], [[1, 1], [1, 0], [2, 0]], [[1, 1], [0, 1], [0, 2]], [[1, 1], [0, 0], [0, 0]], [[1, 2], [1, 1], [2, 0]], [[1, 2], [1, 0], [2, 1]], [[1, 2], [0, 1], [0, 0]], [[1, 2], [0, 0], [0, 1]], [[2, 0], [1, 1], [0, 1]], [[2, 0], [1, 0], [0, 2]], [[2, 0], [0, 1], [1, 1]], [[2, 0], [0, 0], [1, 2]], [[2, 1], [1, 1], [0, 2]], [[2, 1], [1, 0], [0, 0]], [[2, 1], [0, 1], [1, 2]], [[2, 1], [0, 0], [1, 0]], [[2, 2], [1, 1], [0, 0]], [[2, 2], [1, 0], [0, 1]], [[2, 2], [0, 1], [1, 0]], [[2, 2], [0, 0], [1, 1]]]

let states = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]

// states.forEach(state => {
//     g.addNode(state.toString())
// });

result.forEach((triplet) => {
    g.addEdge(triplet[0].toString(), triplet[2].toString(), { label: triplet[1].toString(), directed: true });
})


// g.edges.forEach((edge) => {
//     edge.directed = true;
//     edge.style = { label: 'hello' };
// })
// console.log(g.edges)

var layouter = new Graph.Layout.Spring(g);
layouter.layout();

var renderer = new Graph.Renderer.Raphael('canvas', g, 1200, 900);
renderer.draw();
