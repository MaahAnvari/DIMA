import { 
    GET_GENRE_EBOOK,
    GET_SEARCH_EBOOK,
    GET_TOP_TEN_EBOOK,
    GET_COUNTRY_EBOOK,
    GET_NEW_EBOOK,
    SEARCH_CHANGED,
    GET_SEARCH
} from '../actions/types';

const INITIAL_STATE = { 
    user: null,
    top10:[],
    genre:[],
    search:[],
    country:[],
    newB:[],
    error:'',
    searchKey:'',
};

export default (state = INITIAL_STATE, action) => {
    console.log('Book r', action);
    switch (action.type) {
        case GET_GENRE_EBOOK:
            return { ...state, genre: action.payload.results }; 
        case GET_SEARCH_EBOOK:
            return { ...state, search: action.payload.results }; 
        case GET_TOP_TEN_EBOOK:
            return { ...state, top10: action.payload.results }; 
        case GET_COUNTRY_EBOOK:
            return { ...state, country: action.payload.results }; 
        case GET_NEW_EBOOK:
            return { ...state, newB: action.payload.results }; 
        case SEARCH_CHANGED:
            return { ...state, searchKey: action.payload }; 
        case GET_SEARCH:
            return { ...state, search: action.payload }; 
        default:
            return state;
    }
};
