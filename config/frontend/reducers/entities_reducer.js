import { combineReducers } from "redux"
import usersReducer from "./user_reducer"
import songsReducer from "./songs_reducer";
import commentsReducer from "./comment_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    songs: songsReducer,
    comments: commentsReducer
})

export default entitiesReducer;