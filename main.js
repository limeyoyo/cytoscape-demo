// let nodes = [];
// let edges = [];

// for (let i = 0; i< 5000; i++){
//     nodes.push({ data: { id: 'n'+ i } });
// }

// for (let i = 0; i< 4999;){
//     edges.push({ data: { source: 'n'+ i, target: 'n'+ (++i) } })
// }


const start = new Date().getTime();
var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
    style: [
    {
        selector: 'node',
        style: {
            'background-color': '#27649a',
            'font-size': '5px',
            color: '#ffffff',
            'text-valign': 'center',
            'text-halign': 'center',
            width: '30',
            height: '30',
            'content': 'data(content)',
            'border-width': '2px',
            'border-color': '#183e5f'
        }
    },
    {
        selector: '[direction]',
        style: {
            'background-color': '#183e5f',
            width: '1px',
            height: '1px',
            'border-width': '1px',
            'border-color': '#183e5f'
        }
    },
    {
        selector: 'edge',
        style: {
            width: 2,
            'line-color': '#ddd',
            'arrow-scale': '2px',
            'curve-style': 'unbundled-bezier' // ベジエ曲線
        }
    }
    ],
    elements: {
        nodes: [
            { data: { id: 'n1', content: 'Requirement' }, position: { x: 100, y: 100 } },
            // { data: { id: 'n1-0', direction: 'top'}, position: { x: 100, y: 85 } },
            { data: { id: 'n2', content: 'CarType' }, position: { x: 100, y: 200 } },
            { data: { id: 'n3', content: 'Item' }, position: { x: 200, y: 200 } },
            { data: { id: 'n4', content: 'Parts' }, position: { x: 300, y: 200 } },
            { data: { id: 'n5', content: 'Software' }, position: { x: 400, y: 300 } },
            { data: { id: 'n6', content: 'module' }, position: { x: 500, y: 300 } },
            // { data: { id: 'n6-0', direction: 'top'}, position: { x: 500, y: 285 } },
            { data: { id: 'n7', content: 'ECU' }, position: { x: 400, y: 400 } },
            { data: { id: 'n8', content: 'CAN' }, position: { x: 500, y: 400 } }
          ],
        edges: [
            { data: { source: 'n1', target: 'n6' } },
            { data: { source: 'n2', target: 'n3' } },
            { data: { source: 'n3', target: 'n4' } },
            { data: { source: 'n4', target: 'n5' } },
            { data: { source: 'n5', target: 'n6' } },
            { data: { source: 'n4', target: 'n7' } },
            { data: { source: 'n4', target: 'n7' } },
            { data: { source: 'n7', target: 'n8' } }
          ]
    },
    layout: {
        name: 'preset'
    }
});
cy.autolock( true );
cy.userZoomingEnabled( false );
let index = 10;
cy.on('tap', 'node', evt => {
    console.log(evt.target._private)
    cy.add([
        { group: 'nodes', data: { id: `n${index}`, content: 'child' }, position: { x: evt.target._private.position.x + 50, y: evt.target._private.position.y + 50 } },
        { group: 'edges', data: { source: evt.target._private.data.id, target: `n${index++}` } },
    ])
})
// cy.add({ group: 'nodes', data: { id: 'n0', content: 'child' }, position: { x: 200, y: 400 } })
// console.log(new Date().getTime() - start, 'cytoscape');
// alert(new Date().getTime() - start);