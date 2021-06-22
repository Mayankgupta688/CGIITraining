import React, { useState, useEffect } from "react";
import { EmployeeDetails } from "./EmployeeDetails";
import Axios from "axios";

export function EmployeeListComponentHooks(props) {
    debugger;
    useEffect(() => {
        debugger;
        Axios.get("http://localhost:4000/employees").then((response) => {
            debugger;
            setEmpList(response.data)
        })
    }, [])

    var [empList, setEmpList] = useState([]);

    function deleteEmployee(id) {

        Axios.delete("http://localhost:4000/employees/" + id).then(() => {
            debugger;

            Axios.get("http://localhost:4000/employees").then((response) => {
                debugger;
                setEmpList(response.data)
            })
        });
    }

    return (
        <div>
            <h1>List of Employees are Given Below:</h1>

            <SampleComponent sampleEvent={props.sampleEvent}></SampleComponent>

            <SampleComponentOther sampleEvent={props.sampleEvent}></SampleComponentOther>

            { empList.length > 0 && (
                empList.map((employee) => {
                    return (
                        <EmployeeDetails deleteEmployee={deleteEmployee} employee={employee}></EmployeeDetails>    
                    )
                })
            )}

            {empList.length === 0 && (
                <div>
                    <h2>No Employee To Dispay....</h2>
                </div>
            )}
        </div>
    )
}


function SampleComponent(props) {

    function raiseEvent() {
        debugger;
        props.sampleEvent.emit("Sample Data from Sample Component")
    }
    

    return (
        <div>
            <h1>Hello Sample One</h1>
            <input type="button" value="Raise Event" onClick={raiseEvent} />
        </div>
    )
}

class SampleComponentOther extends React.Component {

    componentDidMount() {
        this.props.sampleEvent.subscribe((data) => {
            alert(data);
        })
    }

    render() {
        return <h1>Hello Sample Two</h1>
    }

    
}