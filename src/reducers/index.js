import { combineReducers } from "redux";
import todos from "../containers/todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter,
});
