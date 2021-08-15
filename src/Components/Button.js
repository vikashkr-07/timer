import React from 'react';

const Button = ({onClickHandle}) =>{
    return(
        <div>
            <button className="btn-grad" type="button" onClick={onClickHandle}>Start Timer</button>
        </div>
    )
}
export default Button;