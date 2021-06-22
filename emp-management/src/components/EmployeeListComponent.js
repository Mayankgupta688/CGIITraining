import React from "react";
import Axios from "axios";
import { EmployeeDetails } from "./EmployeeDetails";

export class EmployeeListComponent extends React.Component {
    constructor() { 
        super();
        this.state = {
            empList: [],
            name: "TechnoFunnel"
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        if(this.state.empList.length === nextState.empList.length) {
            return true;
        }

        return true;
    }


    render() { 
        debugger;
        return (
            <div>
                <h1>List of Employees are Given Below:</h1>

                { this.state.empList.length > 0 && (
                    this.state.empList.map((employee) => {
                        return (
                            <EmployeeDetails employee={employee}></EmployeeDetails>    
                        )
                    })
                )}

                {this.state.empList.length === 0 && (
                    <div>
                        <h2>No Employee To Dispay....</h2>
                    </div>
                )}
                
            </div>
        )
    }

    componentDidMount() {
        fetch("http://localhost:4000/employees").then((data) => {
            data.json().then((response) => {
                this.setState({
                    empList: response,
                    name: "TechnoFunnel"
                })
            })
        })

        setTimeout(() => {
            this.setState({
                empList: this.state.empList,
                name: "Mayank"
            })
        }, 8000);
    }
}