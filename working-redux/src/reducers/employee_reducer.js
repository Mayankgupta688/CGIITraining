export default function employees(state=[], action) {
    if(action.type === "LOAD_EMPLOYEES") {
        debugger;
        return action.payload;
    } else if(action.type === "DELETE_ALL_EMPLOYEE") {
        return [];
    }

    return state;
}