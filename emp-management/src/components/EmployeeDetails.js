export function EmployeeDetails(props) {
    debugger;
    return (
        <div>
            <h3>Employee Name is {props.employee.name}</h3>
            <h4>Employee Id is {props.employee.id}</h4>
            <input type="button" value={`Delete ` +  props.employee.name} onClick={() => props.deleteEmployee(props.employee.id)} /><hr/>
        </div>
    )
}