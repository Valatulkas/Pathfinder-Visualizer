import React from 'react';
import './Node.css';

class Node extends React.Component {
    constructor(props) {
        super (props);
        this.state = {}
    }
    render () {
        const { isFinish, isStart, isVisited } = this.props;
        const extraClassName = isFinish
            ? 'node-finish'
            : isStart
            ? 'node-start'
            : isVisited
            ? 'node-visited'
            : '';
        return <div className={ `node ${extraClassName}`}></div>
    }
}

export const DEFAULT_NODE = {
    row: 0,
    col: 0,
};

export default Node;