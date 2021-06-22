import React, { useState } from "react";
var StorageData = React.createContext({});

export function GrandParent() {
    var [userData, setUserData] = useState({
        userVillage: "Haryana",
        userLanguage: "Hindi"
    })

    function changeVillage() {
        setUserData({
            userVillage: "Delhi",
            userLanguage: "Hindi"
        })
    }

    return (
        <StorageData.Provider value={{"data": userData}}>
            <h1>Village Name from Grand Parent: {userData.userVillage}</h1>
            <h2>Language from Grand Parent: {userData.userLanguage}</h2>
            <input type="button" value="Change Village" onClick={changeVillage} /><hr/>
            <Parents userData={userData}></Parents>
        </StorageData.Provider>
    )
}

function Parents(props) {
    return (
        <div>
            <h1>Parent Village: No Village</h1><hr/>
            <ChildData></ChildData>
        </div>
    )
}

function ChildData(props) {
    return (
        <div>
            <h1>Children Village: No Village</h1><hr/>
            <GrandChildData></GrandChildData>
        </div>
    )
}

function GrandChildData(props) {
    return (
        <StorageData.Consumer>
            {(store) => {
                return <h1>Grand Children Village {store.data.userVillage}</h1>
            }}
        </StorageData.Consumer>
    )
}