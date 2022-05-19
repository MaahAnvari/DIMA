import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CREATE_USER,
    USER_EMAIL_EXIST,
    INVALID_EMAIL,
    WEAK_PASSWORD,
    SIGNIN_USER,

} from '../actions/types';

const INITIAL_STATE = { 
    user: null,
    email: '',
    password: '',
    error:'',
};

export default (state = INITIAL_STATE, action) => {
    console.log('auth r',action);
    switch (action.type) { 
        case EMAIL_CHANGED: 
            return { ...state, email: action.payload, error:'' };
        case PASSWORD_CHANGED: 
            return { ...state, password: action.payload, error:'' }; 
        case CREATE_USER: 
            return { ...state, user: action.payload, error:'' }; 
        case SIGNIN_USER: 
            return { ...state, user: action.payload, error:'' }; 
        case USER_EMAIL_EXIST: 
            return { ...state, error:'This email is already registered' }; 
        case INVALID_EMAIL: 
            return { ...state, error: 'Invalid Email' }; 
        case WEAK_PASSWORD: 
            return { ...state, error: 'weak password!!!' }; 
        
        default:
            return state;
    }
};
