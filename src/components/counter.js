import React from "react";
import {useState} from 'react';
import './counter.css'

function Counter() {
    const [counter, setCounter] = useState(0);
    const inc = () => {
        setCounter(counter + 1);
    }

    const dec = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    }
    return (
        <div className="counter__container">
            <p className='counter__container__counter'>{counter}</p>
            <button className='counter__container__dec-btn' onClick={dec}>-</button>
            <button className='counter__container__inc-btn' onClick={inc}>+</button>

        </div>
    );

}


export default Counter;