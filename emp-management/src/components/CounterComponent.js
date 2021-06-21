import React from "react";

export function CounterComponent() {
    var currentCounter = 0;

    function incrementTimer() {
        currentCounter += 1;
        console.log(currentCounter);
    }
    
    return (
        <div>
            <h1>Current Time is {currentCounter}</h1>
            <input type="button" onClick={incrementTimer} value="Incremnt"/>
        </div>
        
    )
}