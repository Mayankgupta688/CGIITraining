import React from "react";

export function TimerComponent() {
    var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;

    setInterval(() => {
        currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
        console.log(currentTime);
    }, 1000);
    
    return (
        <h1>Current Time is {currentTime}</h1>
    )
}