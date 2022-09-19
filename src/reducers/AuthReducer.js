import { 
    NAME_CHANGED,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SEX_CHANGED,
    CREATE_USER,
    USER_EMAIL_EXIST,
    INVALID_EMAIL,
    WEAK_PASSWORD,
    SIGNIN_USER,
    CONFIRM_PASSWORD_CHANGED,
    UPDATE_USER_DATA,
    GENRE_CHANGED,
    ERROR,
    UPDATE_FAVORITE_BOOK,

} from '../actions/types';

const INITIAL_STATE = { 
    user: null,
    username:'',
    email: '',
    password: '',
    cpassword:'',
    error:'',
    id:'',
    name:'',
    sex:'',
    genre:['Romance'],
    favorites:[],
};

var mid = [];
export default (state = INITIAL_STATE, action) => {
    console.log('auth r',action);
    switch (action.type) { 
        case EMAIL_CHANGED: 
            return { ...state, email: action.payload, error:'' };
        case PASSWORD_CHANGED: 
            return { ...state, password: action.payload, error:'' }; 
        case CONFIRM_PASSWORD_CHANGED: 
            return { ...state, cpassword: action.payload, error:'' }; 
        case CREATE_USER: 
            return { ...state, user: action.payload, name: action.payload._data.name, id: action.payload.id, sex: action.payload._data.sex, genre: [], error:'' }; 
        case SIGNIN_USER: 
            return { ...state, user: action.payload, name: action.payload._data.name, id: action.payload.id, sex: action.payload._data.sex, genre: action.payload._data.genre, favorites: action.payload._data.favorites, error:'' }; 
        case UPDATE_USER_DATA: 
            return { ...state, username: '@'+ action.payload.name, id: action.payload.id, error:'' }; 
        
        case UPDATE_FAVORITE_BOOK:
            return { ...state, favorites: action.payload}
        case SEX_CHANGED: 
            return { ...state, sex: action.payload };
        case NAME_CHANGED: 
            return { ...state, name: action.payload };
        case USER_EMAIL_EXIST: 
            return { ...state, error:'This email is already registered' }; 
        case INVALID_EMAIL: 
            return { ...state, error: 'Invalid Email' }; 
        case WEAK_PASSWORD: 
            return { ...state, error: 'weak password!!!' }; 
        case GENRE_CHANGED:{
            console.log('genre', state.genre )  
            mid = state.genre 
                
            if(mid.includes(action.payload)){
                mid.splice(mid.indexOf(action.payload), 1)
            } else 
                mid.push(action.payload)
            return { ...state, genre: mid}
    
            }
        case ERROR:
            return { ...state, error: action.payload}
        default:
            return state;
    }
};
