import React, { useContext } from 'react';
import CounterContext from './CounterContextAPI';

const Child = () => {

    let counterValue = useContext(CounterContext)


    return (
        <div>
            <h1>This is Counter create using <i>Context API</i></h1>
            <h2>This is a counter for Counting</h2>
            <h3>The Value is : {counterValue}</h3>
            <button onClick={() => { conunterValue[1](++counterValue[0]) }}>
                Increment
            </button>
        </div>
    );
}
export default Child;