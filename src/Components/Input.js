import React from 'react';

const Input = ({onDateInput,input}) =>{
    return(
        <div>
             <input  placeholder="Enter MM:DD:YYYY formate" onChange={onDateInput} value={input} />
        </div>
    )
}

export default Input;