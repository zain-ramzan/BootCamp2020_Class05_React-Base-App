import React, { useReducer } from 'react';
import CounterReducer from './CounterReduser';
const ChildReducer = () => {
    let [state, dispatch] = useReducer(CounterReducer, 10);
    console.log(state)
    return (
        <h1>This is Counter create using <i>Reducer</i></h1>
        <div>
            <h2>This is a ChildReducer : {state} </h2>
        <button onClick={() => dispatch('Increment')}>
            Incrememt ChildReducer
        </button>
       </div>
    );
}

export default ChildReducer;