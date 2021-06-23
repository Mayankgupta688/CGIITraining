import { combineReducers } from "redux";
import employees from "./employee_reducer";
import movies from "./movie_reducer";

export const rootReducer = combineReducers({
    employees: employees,
    movies: movies
})