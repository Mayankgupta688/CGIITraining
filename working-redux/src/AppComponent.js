import React from "react";
import Axios from "axios";

import { connect } from "react-redux";
import * as actions from "./actions/index";

class AppComponent extends React.Component {

    loadData = () => {
        debugger;
        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            this.props.loadEmployeeDetails(response.data)
        })
    }

    deleteAllEmployees = () => {
        this.props.deleteAllEmployees()
    }

    render() {
        debugger;
        return (
            <div>
                <input type="button" value="Load Data" onClick={this.loadData} />
                <input type="button" value="Delete Data" onClick={this.deleteAllEmployees} />
                { this.props.employees.map((employee) => {
                    return (
                        <div>
                            Employee Name: {employee.name}<hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const AppComponentConnected = connect((state) => {
    return {
        employees: state.employees
    }
} , actions)(AppComponent)

export default AppComponentConnected;