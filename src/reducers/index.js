// // import { combineReducers } from 'redux';
import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import BookReducer from "./EBookReducer";
import UserInfoReducer from "./UserInfoReducer";
import AudioBookReducer from "./AudioBookReducer"

export default combineReducers({
    auth: AuthReducer,
    ebook: BookReducer,
    abook: AudioBookReducer,
    user: UserInfoReducer,
});
