import React from "react";
import './Pathfinder.css';
import Node from './Node/Node';

class Pathfinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div>
                Foo
                <Node></Node>
            </div>
        );
    }
}

export default Pathfinder