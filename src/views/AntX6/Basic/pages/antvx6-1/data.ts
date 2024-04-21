export const data = {
    nodes: [
        {
            id: 'node1',
            shape: 'rect',
            x: 40,
            y: 40,
            width: 100,
            height: 40,
            label: 'hello',
            tools: ['button-remove'],
            attrs: {
                body: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                    fill: '#fff',
                    rx: 6,
                    ry: 6,
                },
            },
        },
        {
            id: 'node2',
            shape: 'rect',
            x: 160,
            y: 180,
            width: 100,
            height: 40,
            label: 'world',
            attrs: {
                body: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                    fill: '#fff',
                    rx: 6,
                    ry: 6,
                },
            },
        },
        {
            id: 'node3',
            shape: 'rect',
            x: 10,
            y: 180,
            width: 100,
            height: 40,
            label: 'world2',
            attrs: {
                body: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                    fill: '#fff',
                    rx: 6,
                    ry: 6,
                },
            },
        }
    ],
    edges: [
        {
            shape: 'edge',
            source: 'node1',
            target: 'node2',
            label: 'x6',
            attrs: {
                line: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                },
            },
        },
        {
            shape: 'edge',
            source: 'node2',
            target: 'node3',
            label: 'x6',
            attrs: {
                line: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                },
            },
        }
    ],
}
