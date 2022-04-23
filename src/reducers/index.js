// // import { combineReducers } from 'redux';
import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import BookReducer from "./BookReducer";
import UserInfoReducer from "./UserInfoReducer";

export default combineReducers({
    auth: AuthReducer,
    ebook: BookReducer,
    user: UserInfoReducer,
});
