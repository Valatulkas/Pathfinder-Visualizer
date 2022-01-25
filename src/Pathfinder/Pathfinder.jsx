import React from "react";
import './Pathfinder.css';
import Node from './Node/Node';
import { dijkstra } from '../algorithms/dijkstra';
import './Pathfinder.scss';

class Pathfinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div>
                Foo
            </div>
        );
    }
}

export default Pathfinder;