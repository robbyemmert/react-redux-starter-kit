import React from 'react';
import { segmentConnect } from 'redux-segmentize';
import { actionTypes } from '../constants';

const actions = {
    increment: () => ({ type: actionTypes.INCREMENT_SEGMENT_COUNTER }),
    decrement: () => ({ type: actionTypes.DECREMENT_SEGMENT_COUNTER})
}

const Counter = props => {
    return (
        <div className="sample-segment">
            <button onClick={() => props.increment()}>+</button>
            <span className="count">{props.count}</span>
            <button onClick={() => props.decrement()}>-</button>
        </div>
    )
}

function select(state) {
    return {
        count: state.count
    }
}

export default segmentConnect(select)(Counter, actions);