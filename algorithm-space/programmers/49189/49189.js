function solution(n, edge) {
    let graph;
    let distance;

    const makeGraph = (array) => {
        let graph = {};
        array.map(vertex => {
            let start = vertex[0].toString();
            let end = vertex[1].toString();

            if (graph.hasOwnProperty(start)) {
                graph[start].push(end);
            } else {
                graph[start] = [end];
            }

            if (graph.hasOwnProperty(end)) {
                graph[end].push(start);
            } else {
                graph[end] = [start];
            }

        });

        // value들 오름차순으로
        Object.keys(graph).map(key => graph[key].sort((a, b) => a - b));

        return graph;
    };

    const bfs = (graph, startNode) => {

        let visited = [];
        let needVisit = [];
        let distArr = [];

        // 시작
        visited.push(startNode);
        needVisit.push({ node: startNode, dist: 0 });

        while (needVisit.length !== 0) {

            //FIFO
            let { node, dist } = needVisit.shift();

            const adj = graph[node];
            for (let i = 0; i < adj.length; i++) {
                if (!visited.includes(adj[i])) {

                    visited.push(adj[i]);
                    needVisit.push({ node: adj[i], dist: dist + 1 });
                }
            }

            //현재 뽑은 node 및 거리 저장
            distArr.push({ node: node, dist: dist });
        }

        return distArr;
    };

    graph = makeGraph(edge);
    distance = bfs(graph, '1');
    distance.sort((a, b) => b['dist'] - a['dist']);

    return distance.filter(node => node['dist'] >= distance[0]['dist']).length;
}