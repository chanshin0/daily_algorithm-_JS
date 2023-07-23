function solution(n, edges) {
    // Initialize an empty adjacency list.
    const graph = Array.from({length: n + 1}, () => []);

    // Initialize the visited list.
    const dist = Array(n + 1).fill(Infinity);

    // Construct the adjacency list.
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // Use a queue for the BFS.
    const queue = [[1, 0]];

    // The distance from node 1 to itself is 0.
    dist[1] = 0; dist[0] = 0

    while (queue.length > 0) {
        const [node, distance] = queue.shift();

        for (const neighbor of graph[node]) {
            if (dist[neighbor] > distance + 1) {
                dist[neighbor] = distance + 1;
                queue.push([neighbor, distance + 1]);
            }
        }
    }

    // Find the maximum distance and count how many nodes have this distance.
    const maxDist = Math.max(...dist);
    return dist.filter(d => d === maxDist).length;
}
