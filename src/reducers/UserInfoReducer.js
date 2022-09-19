import { act } from 'react-test-renderer';
import { 
    NAME_CHANGED,
    USERNAME_CHANGED,
    SEX_CHANGED,
    GENRE_CHANGED,
} from '../actions/types';

const INITIAL_STATE = { 
    name:'',
    username: '',
    sex:'',
    // genre:[],
};
var mid = [];
export default (state = INITIAL_STATE, action) => {
    console.log('user r',action);
    switch (action.type) { 
        // case NAME_CHANGED: 
        //     return { ...state, name: action.payload };
        // case SEX_CHANGED: 
        //     return { ...state, sex: action.payload };
        case USERNAME_CHANGED: 
            return { ...state, username: action.payload }; 
        // case GENRE_CHANGED:{
        //     console.log('genre', state.genre, )  
        //     mid = state.genre 
            
        //     if(mid.includes(action.payload)){
        //         mid.splice(mid.indexOf(action.payload), 1)
        //     } else 
        //         mid.push(action.payload)
        //     return { ...state, genre: mid}

        // }
            
        default:
            return state;
    }
};
