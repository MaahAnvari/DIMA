<<<<<<< HEAD
<<<<<<< Updated upstream
import { 
    GET_GENRE_EBOOK,
    GET_SEARCH_EBOOK,
    GET_TOP_TEN_EBOOK,
    GET_COUNTRY_EBOOK,
    GET_TOP_TEN_AUDIOBOOK,
    GET_GENRE_AUDIOBOOK,
    GET_SEARCH_AUDIOBOOK,
    GET_COUNTRY_AUDIOBOOK,
    GET_NEW_AUDIOBOOK,
    GET_FREE_AUDIOBOOK,
} from '../actions/types';

const INITIAL_STATE = { 
    user: null,
    top10:[],
    genre:[],
    search:[],
    country:[],
    newA:[],
    free:[],
    error:'',
    searchKey:'',
};

export default (state = INITIAL_STATE, action) => {
    console.log('Book r', action);
    switch (action.type) {
        case GET_GENRE_AUDIOBOOK:
            return { ...state, genre: action.payload.results }; 
        case GET_SEARCH_AUDIOBOOK:
            return { ...state, search: action.payload.results }; 
        case GET_TOP_TEN_AUDIOBOOK:
            return { ...state, top10: action.payload.results }; 
        case GET_COUNTRY_AUDIOBOOK:
            return { ...state, country: action.payload.results }; 
        case GET_NEW_AUDIOBOOK:
            return { ...state, newA: action.payload.results }; 
        case GET_FREE_AUDIOBOOK:
            return { ...state, free: action.payload.results }; 
        default:
            return state;
    }
};
=======
import { 
    GET_GENRE_EBOOK,
    GET_SEARCH_EBOOK,
    GET_TOP_TEN_EBOOK,
    GET_COUNTRY_EBOOK,
    GET_TOP_TEN_AUDIOBOOK,
    GET_GENRE_AUDIOBOOK,
    GET_SEARCH_AUDIOBOOK,
    GET_COUNTRY_AUDIOBOOK,
    GET_NEW_AUDIOBOOK,
    GET_FREE_AUDIOBOOK,
} from '../actions/types';

const INITIAL_STATE = { 
    user: null,
    top10:[],
    genre:[],
    search:[],
    country:[],
    newA:[],
    free:[],
    error:'',
    searchKey:'',
};

export default (state = INITIAL_STATE, action) => {
    console.log('Book r', action);
    switch (action.type) {
        case GET_GENRE_AUDIOBOOK:
            return { ...state, genre: action.payload.results }; 
        case GET_SEARCH_AUDIOBOOK:
            return { ...state, search: action.payload.results }; 
        case GET_TOP_TEN_AUDIOBOOK:
            return { ...state, top10: action.payload.results }; 
        case GET_COUNTRY_AUDIOBOOK:
            return { ...state, country: action.payload.results }; 
        case GET_NEW_AUDIOBOOK:
            return { ...state, newA: action.payload.results }; 
        case GET_FREE_AUDIOBOOK:
            return { ...state, free: action.payload.results }; 
        default:
            return state;
    }
};
>>>>>>> Stashed changes
=======
import { 
    GET_TOP_TEN_AUDIOBOOK,
    GET_GENRE_AUDIOBOOK,
    GET_SEARCH_AUDIOBOOK,
    GET_COUNTRY_AUDIOBOOK,
    GET_NEW_AUDIOBOOK,
    GET_FREE_AUDIOBOOK,
    SEARCH_CHANGED
} from '../actions/types';

const INITIAL_STATE = { 
    user: null,
    top10:[],
    genre:[],
    search:[],
    country:[],
    newA:[],
    free:[],
    error:'',
    searchKey:'',
};

export default (state = INITIAL_STATE, action) => {
    console.log('Book r', action);
    switch (action.type) {
        case GET_GENRE_AUDIOBOOK:
            return { ...state, genre: action.payload.results }; 
        case GET_SEARCH_AUDIOBOOK:
            return { ...state, search: action.payload.results }; 
        case GET_TOP_TEN_AUDIOBOOK:
            return { ...state, top10: action.payload.results }; 
        case GET_COUNTRY_AUDIOBOOK:
            return { ...state, country: action.payload.results }; 
        case GET_NEW_AUDIOBOOK:
            return { ...state, newA: action.payload.results }; 
        case GET_FREE_AUDIOBOOK:
            return { ...state, free: action.payload.results }; 
        default:
            return state;
    }
};
>>>>>>> b4f36e2f084692d4fe5e9c03a8cbfa8161e93285
