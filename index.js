function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [];
  stack.push(rootNode);
  let visited = [rootNode];

  while (stack.length != 0) {
    let currentNode = stack.pop();
    if (!currentNode.discovered) {
      currentNode.discovered = true;
      let adjacentNodes = findAdjacent(currentNode, vertices, edges);

      adjacentNodes.forEach((n) => {
        visited.push(n);
        stack.push(n);
      });
    }
  }

  return visited;
}

function findAdjacent(node, vertices, edges) {
  let nodeEdges = edges.filter((e) => e.includes(node.name));
  let adjacentNames = nodeEdges.flat().filter((n) => n != node.name);
  let adjacentNodes = vertices
    .filter((v) => adjacentNames.includes(v.name))
    .filter((v) => !v.discovered);

  return adjacentNodes;
}
