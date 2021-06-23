export function loadEmployeeDetails(employeeList) {
    debugger;
    return {
        type: "LOAD_EMPLOYEES",
        payload: employeeList
    }
}

export function deleteEmployeeDetails(empId) {
    return {
        type: "DELETE_EMPLOYEE",
        payload: empId
    }
}

export function deleteAllEmployeeDetails() {
    return {
        type: "DELETE_ALL_EMPLOYEE"
    }
}