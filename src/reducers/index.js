import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./counter";
import posts from "./posts";

// sub reducer 들을 합쳐줘야함
const rootReducer = combineReducers({
  todos,
  counter,
  posts,
});

export default rootReducer;
