import React from "react";
import './Pathfinder.css';
import Node from './Node/Node';
import { dijkstra } from '../algorithms/dijkstra.js';
import './Pathfinder.css';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

class Pathfinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
        };
    }

    componentDidMount() {
        const grid = getInitialGrid();
        this.setState({grid});
    }
    animateDijkstra(visitedNodesInOrder) {
        for (let i = 0; i < visitedNodesInOrder.length; i++) {
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                const newGrid = this.state.grid.slice();
                const newNode = {
                    ...node,
                    isVisited: true,
                };
                newGrid[node.row][node.col] = newNode;
                this.setState({grid: newGrid});
            }, 20 * i);
        }
    }

    visualizeDijkstra() {
        const { grid } = this.state;
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        this.animateDijkstra(visitedNodesInOrder);
    }

    render () {
        const { grid } = this.state;

        return (
            <React.Fragment>
                <button onClick={() => this.visualizeDijkstra() }>
                    Visualize Dijkstra's Algorithm
                </button>
                <div className="grid">
                    {grid.map((row, rowId) => {
                        return (
                            <div key={rowId}>
                                {row.map((node, nodeId) => {
                                    const {isFinish, isStart, isVisited} = node;
                                    return (
                                        <Node
                                            key={nodeId}
                                            isFinish={isFinish}
                                            isStart={isStart}
                                            isVisited={isVisited}
                                        ></Node>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        );
    }
}

const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
        const currentRow = [];
        for (let col = 0; col < 50; col++) {
            currentRow.push(createNode(col,row));
        }
        grid.push(currentRow);
    }
    return grid;
}

const createNode = (col, row) => {
    return {
        col,
        row,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        distance: Infinity,
        isVisited: false,
        previousNode: null,
    }
}


export default Pathfinder;