export default function movies(state=[], action) {
    if(action.type === "LOAD_MOVIES") {
        return action.payload;
    } else if(action.type === "DELETE_ALL_MOVIES") {
        return [];
    }

    return state;
}