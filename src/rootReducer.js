import usersReducer from "./module/users/reducer";
import postsReducer from "./module/posts/reducer";
import commentsReducer from "./module/comments/reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    usersRed : usersReducer,
    postsReducer ,
    commentsReducer
});
export default rootReducer;