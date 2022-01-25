import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './Node.css';

class Node extends Component {
    render () {

        const { isFinish, isStart } = this.props;
        const extraClassName = isFinish
            ? 'node-finish'
            :isStart
            ? 'node-start'
            : '';
        return <div className={ `node ${extraClassName}`}></div>
    }
}

export const DEFAULT_NODE = {
    row: 0,
    col: 0,
};

export default Node;