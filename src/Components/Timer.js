
import React from 'react';
import './Timer.css'

const Timer = ({days,hours,minutes,seconds}) =>{
    return(
    <div className="container">
        <div className="text-container">
            <h1>{days}</h1>
            <p>Days</p>
        </div>
        <div className="text-container">
            <h1>{hours}</h1>
            <p>Hours</p>
        </div>
        <div className="text-container">
            <h1>{minutes}</h1>
            <p>Minutes</p>
        </div>
        <div className="text-container">
            <h1>{seconds}</h1>
            <p>Seconds</p>
        </div>
    </div>
    )
}
export default Timer;