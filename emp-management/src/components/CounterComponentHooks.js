import React, { useState } from "react";

export function CounterComponentHooks() {
    var [counter, setCounter] = useState(0);
    var [name, setName] = useState("Mayank");

    function incrementTimer() {
        setCounter(counter + 1);
    }

    function updateName() {
        setName("TechnoFunnel");
    }
    
    return (
        <div>
            <h1>Current Time is {counter}</h1>
            <h2>User Name: {name}</h2>
            <input type="button" onClick={incrementTimer} value="Incremnt"/>
            <input type="button" onClick={updateName} value="Update Name"/>
        </div>
        
    )
}