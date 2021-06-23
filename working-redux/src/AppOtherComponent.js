import React from "react";

import { connect } from "react-redux";

class AppOtherComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Employee Length {this.props.employees.length}</h1>
            </div>
        )
    }
}

const AppOtherComponentConnected = connect((state) => {
    return {
        employees: state.employees
    }
} , null)(AppOtherComponent)

export default AppOtherComponentConnected;